import PocketBase, {FileQueryParams,Record} from "pocketbase";
import { pb_url, pb_user_collection } from "../consts";
import { GithubOauthResponse,PBUserRecord,TUserSignUpFormFields } from "../user";
import { useUserStore } from "../zustand/user";

export const pb = new PocketBase(pb_url);


// pb.beforeSend = function (url, reqConfig) {
//   // For list of the possible reqConfig properties check
//   // https://developer.mozilla.org/en-US/docs/Web/API/fetch#options
//   fetch(url, {
//     cache: "no-cache",
//   })

//   return reqConfig;
// };
export async function getUser() {
  try {
    pb.authStore.loadFromCookie(document?.cookie ?? "");
    return pb.authStore.model;
  } catch (error) {
    throw error;
  }
}

interface ILoginUser {
  user: string;
  password: string;
}

export async function loginUser({user,password}: ILoginUser) {
  try {
    const authData = await pb.collection(pb_user_collection).authWithPassword<PBUserRecord>(user,password);
    useUserStore.setState({
      user: authData.record
    })
    return authData;
  } catch (error) {
    throw error;
  }
}

interface IOuthLogin {
  provider: "google" | "github";
}

export async function triggerOuathLogin({provider}: IOuthLogin) {
  try {
    const authData = await pb.collection(pb_user_collection).authWithOAuth2<GithubOauthResponse>({provider});
    // console.log("authdata from github  == ",authData);
    return authData;
  } catch (error) {
    throw error;
  }
}
export async function updateUser(authData: GithubOauthResponse) {
  try {
  const dev = authData.record;
   const data = {
      access_token: authData.meta?.accessToken,
      github_login: authData.meta?.rawUser?.login,
      avatar:authData.meta?.rawUser?.avatar_url,
      username: authData.meta?.rawUser?.login,
      bio: authData.meta?.rawUser?.bio,
      emailVisibility:true
    };
    const new_dev = await pb.collection(pb_user_collection).update(dev.id, data);
    useUserStore.setState({
      // @ts-expect-error
      user: new_dev
    })
    // console.log("new dev === ", new_dev);
    return new_dev;
  } catch (error) {
    throw error;
  }
}

export async function oauthLogin({
  provider,
}: IOuthLogin) {
  try {
    const authdata = await triggerOuathLogin({
      provider,
    });
    // @ts-expect-error
    return updateUser(authdata);
  } catch (error) {
    throw error;
  }
}

interface ISignupuser {
  user: TUserSignUpFormFields;
}

export async function createUser({
  user,
}: ISignupuser) {
  try {
    const authData = await pb.collection(pb_user_collection).create(user);
    useUserStore.setState({
      user: authData.record
    })
    return authData;
  } catch (error) {
    throw error;
  }
}

export async function logoutUser() {
  try {
    await pb.authStore.clear();
    useUserStore.setState({
      user: undefined
    })
  } catch (error) {
    throw error;
  }
}

export function getPBImageUrl(record: Pick<Record,"id" | "collectionId" | "collectionName">,
  filename: string,
  queryParams?: FileQueryParams | undefined
) {
  return pb.files.getUrl(
    record,
    filename,
    queryParams
  );
}

export const makeImageUrl = (
  coll_name: string,
  record_id: string,
  media_name: string
) => {
  if (media_name) {
    return `${pb_url}/api/files/${coll_name}/${record_id}/${media_name}`;
  }
  return;
};

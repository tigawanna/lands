import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { PBUserRecord } from "../user";


interface IUserStore {
  user: PBUserRecord | undefined;
  updateUser: (new_user?: PBUserRecord) => void;
  fetchUser: () => Promise<void>;
}

// export const useUserStore = create<IUserStore>()((set) => ({
// user:undefined,
// updateUser:(new_user)=>{
//     set((state)=>({user:new_user}))
// }
// }))

export const useUserStore = create<IUserStore>()(
  devtools(
    persist(
      (set) => ({


        user: undefined,
        updateUser: (new_user) => {
          set((state) => ({ user: new_user }));
        },
        fetchUser: async () => {
          const response = await agnosticUserAuth();
          // const data = await response.json();
          // set((state) => ({ user: data }));
        },


      }),

      {
        name: "lands-admin-storage",
      }
    )
  )
);

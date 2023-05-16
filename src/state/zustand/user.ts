import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { PBUserRecord } from "../user";

interface IUserStore {
  user?: PBUserRecord;
  updateUser: (new_user?: PBUserRecord) => void;
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
      }),

      {
        name: "lands-admin-storage",
      }
    )
  )
);

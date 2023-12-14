import type { UserVK } from "@/stores/friends";

export const searchUsers = async (body: { q: string }): Promise<UserVK[]> =>
  new Promise((res) => {
    let users: UserVK[] = [];
    const params = {
      fields: "photo_50,counters,lists,sex,bdate"
    };
    VK.Api.call("users.search", { ...params, q: body.q, v: import.meta.env.VITE_VK_API_VERSION }, function (r: any) {
      if (r.response) {
        users = r.response.items;
        res(users);
      }
    });

    return users;
  });

export const getFriends = (user_id: number): Promise<{ count: number; items: number[] } | null> =>
  new Promise((res, rej) => {
    const params = {
      user_id,
      v: import.meta.env.VITE_VK_API_VERSION
    };

    VK.Api.call("friends.get", { ...params }, (r: any) => {
      if (r.response) {
        res(r.response);
      } else {
        console.error("get friends error:", r);
        rej(null);
      }
    });
  });

export const getUser = (user_ids: string) =>
  new Promise((res, rej) => {
    const params = {
      user_ids,
      fields: "bdate,photo_50,sex,counters,is_friend",
      v: import.meta.env.VITE_VK_API_VERSION
    };
    VK.Api.call("users.get", { ...params }, (r: any) => {
      if (r.response) {
        res(r.response);
      } else {
        console.error("get user error", r);
        rej(null);
      }
    });
  });

export const getWall = (owner_id: number, options?: any) =>
  new Promise((res, rej) => {
    const params = {
      ...options,
      owner_id,
      v: import.meta.env.VITE_VK_API_VERSION
    };
    VK.Api.call("wall.get", { ...params }, (r: any) => {
      if (r.response) {
        res(r.response);
      } else {
        console.error("get user error", r);
        rej(null);
      }
    });
  });

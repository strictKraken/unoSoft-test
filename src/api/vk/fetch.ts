import type { UserVK } from "@/stores/friends";

export const searchUsers = async (body: { q: string }): Promise<UserVK[]> =>
  new Promise((res) => {
    let users: UserVK[] = [];

    VK.Api.call(
      "users.search",
      { q: body.q, fields: "photo_50", v: import.meta.env.VITE_VK_API_VERSION },
      function (r) {
        if (r.response) {
          users = r.response.items;
          res(users);
        }
      }
    );

    return users;
  });

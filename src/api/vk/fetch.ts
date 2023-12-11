import mock from "./mock.json";

export const searchUsers = async (q?: string): Promise<any[]> => {
  return await mock.users;
};

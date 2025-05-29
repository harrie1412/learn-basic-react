import { get } from "../../utils/request";

export const getTopic = async () => {
  const res = await get(`topics`);
  return res;
};


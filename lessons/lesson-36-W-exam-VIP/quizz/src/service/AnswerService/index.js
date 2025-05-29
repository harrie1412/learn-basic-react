import { get, post } from "../../utils/request";
import { getCookie } from "../../hepler";
export const postAnswer = async (option) => {
  const res = await post("answers", option);
  return res;
};
export const getAnswerByUserId = async () => {
  const userId = getCookie("id");
  const res = await get(`answers?userId=${userId}`);
  return res;
};
export const getAnswerById = async (id) => {
  const res = await get(`answers?id=${id}`);
  return res;
};

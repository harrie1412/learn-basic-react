import { get } from "../../utils/request";

export const getQuestion = async () => {
  const res = await get("questions");
  return res;
};
export const getQuestionByTopicId = async (topicId) => {
  const res = await get(`questions?topicId=${topicId}`);
  return res;
};

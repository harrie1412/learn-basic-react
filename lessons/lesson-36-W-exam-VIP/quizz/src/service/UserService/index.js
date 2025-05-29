import { get, post } from "../../utils/request";

export const getUser = async ()=>{
    const res = await get("users");
    return res;
}
export const postUser = async(options)=>{
    const res = await post("users",options);
    return res;
}
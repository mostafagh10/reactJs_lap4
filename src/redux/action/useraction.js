import { GET_USERS , ADD_USER } from "../constant/userconstant";

export const ADDREMINDER = (data) => {
    const action = {
        type : ADD_USER,
        data : data,
    }
    console.log("action" , action);
    return action
}
import { GET_USERS , ADD_USER } from "../constant/userconstant";

const INITIAL_STATE = {
    users : []
}

export const userreducer = (state = INITIAL_STATE , action) => {
    switch (action.type){
        case ADD_USER:
            return{
                users : [...state.users , action.data],
            };
        case GET_USERS:
            return{
                users : [...state.users],
            } ;
        default:
            return state;
    }
}
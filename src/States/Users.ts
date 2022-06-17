import { Reducer } from "redux";
import { User } from "../models/User"

export type UserState = {
    [id: number]: User
}
export const initialUsersState = {};
export const UserReducer: Reducer<UserState> = (state = initialUsersState, action) => {

    switch (action.type) {
        case "user add": {
            const { id } = action.payload;

            return { ...state, [id]: action.payload }
        }






        default: {
            return state;
        }


    }
}

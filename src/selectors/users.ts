import { State } from "../store";

export const userselector = (state: State) => {
    return Object.keys(state.users).map(userId => state.users[userId as any]);
} 
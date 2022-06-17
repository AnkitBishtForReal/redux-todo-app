import { createStore, Reducer } from 'redux'


import { initialTodosState, todoReducer, TodoState } from './States/Todos';
import { initialUsersState, UserReducer, UserState } from './States/Users';
export type State = {
    todos: TodoState;

    users: UserState

};

const initialState: State = {
    todos: initialTodosState,
    users: initialUsersState,
}
const reducer: Reducer<State> = (state: State = initialState, action) => {

    return {
        todos: todoReducer(state.todos, action),
        users: UserReducer(state.users, action),
    }
}
const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
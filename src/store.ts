import { bindActionCreators, createStore, Reducer } from 'redux'

import type { Todo } from './models/Todo'
export type State = {
    todos: { [id: number]: Todo }


}
const initialState: State = { todos: {} }
const reducer: Reducer<State> = (currentState: State = initialState, action) => {
    console.log("sjnddk", currentState.todos)

    switch (action.type) {
        case "todo added": {
            const { id, done } = action.payload
            console.log("action payload", action.payload)
            const newTodoArray = { ...currentState.todos, [id]: action.payload }
            console.log("current state", currentState)
            return { ...currentState, todos: newTodoArray }
        }
        case "todo status changed": {
            console.log("marked as done")
            const { id, done } = action.payload
            console.log("done", done)
            const newTodoArray = { ...currentState.todos, [id]: { ...currentState.todos[id], done } }

            return { ...currentState, todos: newTodoArray }

        }


        default: {
            return currentState;
        }

        case "todo delete": {
            console.log("todo delete", action.id)
            const newList = Object.keys(currentState.todos).map(id => currentState.todos[id as any]).filter((elem) => elem.id !== action.id)

            return { ...currentState, todos: newList }
        }
    }

}
const store = createStore(reducer);
export default store;
import { bindActionCreators, createStore, Reducer } from 'redux'
import { TODO_ADDED, TODO_MARKED_DONE, TODO_MARKED_UNDONE } from './action'
import type { Todo } from './models/Todo'
type State = {
    todos: Todo[]


}
const initialState: State = { todos: [] }
const reducer: Reducer<State> = (currentState: State = initialState, action) => {
    console.log("sjnddk", currentState.todos)

    switch (action.type) {
        case "todo added": {
            const { id, data } = action.payload
            console.log("action payload", action.payload)
            const newTodoArray = [...currentState.todos, action.payload]
            console.log("current state", currentState)
            return { ...currentState, todos: newTodoArray }
        }
        case "todo marked done": {
            console.log("marked as done")

            const newTodoArray = currentState.todos.map(t => {
                if (t.id === action.payload.id) {
                    return { ...t, done: true }

                }
                else {
                    return t;
                }

            })
            return { ...currentState, todos: newTodoArray }

        }
        case "todo marked undone": {
            const newTodoArray = currentState.todos.map(t => {
                if (t.id === action.payload.id) {
                    return { ...t, done: false }
                }
                else {
                    return t;
                }
            })
            return { ...currentState, todos: newTodoArray }
        }

        default: {
            return currentState;
        }

        case "todo delete": {
            console.log("todo delete", action.id)
            const newList = currentState.todos.filter((elem) => elem.id !== action.id)

            return { ...currentState, todos: newList }
        }
    }

}
const store = createStore(reducer);
export default store;
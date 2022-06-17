import { Reducer } from "redux";
import { Todo } from "../models/Todo"

export type TodoState = {
    [id: number]: Todo
}
export const initialTodosState = {};

export const todoReducer: Reducer<TodoState> = (state = initialTodosState, action) => {

    switch (action.type) {
        case "todo added": {
            const { id, data, done } = action.payload
            console.log("action payload", action.payload)

            console.log("current state", state)
            return { ...state, [id]: action.payload }
        }
        case "todo status changed": {
            console.log("marked as done")
            const { id, done } = action.payload
            console.log("done", done)


            return { ...state, [id]: { ...state[id], done } }

        }




        default: {
            return state;
        }

        case "todo delete": {
            console.log("todo delete", action.id)
            const { id } = action.payload
            const newState = { ...state }
            delete newState[id];

            return newState;
        }
    }
}
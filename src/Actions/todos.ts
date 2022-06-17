import { Todo } from "../models/Todo";
let nextId = 0
export const TODO_ADDED = (data: string) => {

    return {
        type: "todo added",
        payload: {
            id: ++nextId,
            data,
            done: false
        }
    }
};


export const TODO_STATUS_CHANGED = (id: number, done: boolean) => {

    return {
        type: "todo status changed",
        payload: {


            id,
            done: !done

        }
    };
}



export const TODO_DELETE = (id: number) => {

    return {
        type: "todo delete",
        payload: {


            id,


        }
    }
}
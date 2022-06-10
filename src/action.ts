import { Todo } from "./models/Todo";
let nextId = 0
export const TODO_ADDED = (data: any) => {

    return {
        type: "todo added",
        payload: {
            id: ++nextId,
            data: data,
            done: false
        }
    }
};


export const TODO_STATUS_CHANGED = (id: any, done: boolean) => {

    return {
        type: "todo status changed",
        payload: {


            id,
            done: !done

        }
    };
}



export const TODO_DELETE = (id: any) => {

    return {
        type: "todo delete",
        id
    }
}
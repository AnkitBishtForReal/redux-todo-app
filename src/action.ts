import { Todo } from "./models/Todo";
export const TODO_ADDED = (data: any) => {

    return {
        type: "todo added",
        payload: {
            id: new Date().getTime().toString(),
            data: data,
            done: false
        }
    }
};


export const TODO_MARKED_DONE = (id: any) => {

    return {
        type: "todo marked done",
        payload: {


            id,
            done: false
        }
    };
}

export const TODO_MARKED_UNDONE = (id: any) => {

    return {
        type: "todo marked undone",
        payload: {
            id,
            done: false

        }
    }
}

export const TODO_DELETE = (id: any) => {

    return {
        type: "todo delete",
        id
    }
}

let nextId = 0
export const USER_ADD = (data: string) => {

    return {
        type: "user add",
        payload: {
            id: ++nextId,
            data
        }
    }
};



import { State } from "./store"

export const doneSelector = (s: State) => s.todos.filter((t) => t.done);
export const todosSelector = (s: State) => s.todos.filter((t) => !t.done);
export const donecountSelector = (s: State) => s.todos.filter((t) => t.done).length;
export const undonecountSelector = (s: State) => s.todos.filter((t) => !t.done).length;



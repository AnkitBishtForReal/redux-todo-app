import { State } from "./store"

export const doneSelector = (s: State) => Object.keys(s.todos).map(id => s.todos[id as any]).filter((t) => t.done);
export const todosSelector = (s: State) => Object.keys(s.todos).map(id => s.todos[id as any]).filter((t) => !t.done);
export const donecountSelector = (s: State) => Object.keys(s.todos).map(id => s.todos[id as any]).filter((t) => t.done).length;
export const undonecountSelector = (s: State) => Object.keys(s.todos).map(id => s.todos[id as any]).filter((t) => !t.done).length;

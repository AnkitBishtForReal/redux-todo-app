export const doneSelector = (s: any) => s.todos.filter((t: any) => t.done);
export const todosSelector = (s: any) => s.todos.filter((t: any) => !t.done);
export const donecountSelector = (s: any) => s.todos.filter((t: any) => t.done).length;
export const undonecountSelector = (s: any) => s.todos.filter((t: any) => !t.done).length;



import { FC } from "react";
import { connect, useDispatch } from "react-redux";
import { TODO_DELETE, TODO_STATUS_CHANGED } from "./Actions/todos";
import { Todo } from "./models/Todo"
import { doneSelector, todosSelector } from "./selectors/todos";
import { State } from "./store";

import TodoRow from "./TodoRow";
type TodoListProps = {
    todos: Todo[];
    onStatusChange: (id: number, done: boolean) => void;
    onDelete: (id: number) => void;
}
const TodoList: FC<TodoListProps> = ({ todos, onStatusChange, onDelete }) => {


    console.log("todos", todos)

    return <div>
        {todos.map((t) => (<TodoRow key={t.id} onStatuschange={onStatusChange} onDelete={onDelete} todo={t} />))}
    </div>
};

TodoList.defaultProps = {

}

export default TodoList;

const incompleteMapper = (s: State) => {
    return { todos: todosSelector(s) };
};
const completeMapper = (s: State) => {
    return { todos: doneSelector(s) };

};
console.log("doneselector")

const dispatchMapper = {
    onStatusChange: TODO_STATUS_CHANGED,
    onDelete: TODO_DELETE
}

export const Incompletetodo = connect(incompleteMapper, dispatchMapper)(TodoList);
export const Completetodo = connect(completeMapper, dispatchMapper)(TodoList);
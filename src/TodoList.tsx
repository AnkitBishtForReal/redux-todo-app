import { FC } from "react";
import { connect } from "react-redux";
import { Todo } from "./models/Todo"
import { doneSelector, todosSelector } from "./selector";
import { State } from "./store";

import TodoRow from "./TodoRow";
type TodoListProps = {
    todos: Todo[];
}
const TodoList: FC<TodoListProps> = ({ todos }) => {
    return <div>
        {todos.map((t) => (<TodoRow key={t.id} todo={t} />))}
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


export const Incompletetodo = connect(incompleteMapper)(TodoList);
export const Completetodo = connect(completeMapper)(TodoList);
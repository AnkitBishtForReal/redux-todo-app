import { FC } from "react";
import { Todo } from "./models/Todo"

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

import { useState } from "react";
import { FC } from "react";
import Button from "./Button";

import TodoCreator from "./TodoCreator";

type TodoFormProps = {

}
const TodoForm: FC<TodoFormProps> = () => {
    const [showTodoCreateForm, updateShowTodoCreateForm] = useState(false);
    const updateForm = () => {
        updateShowTodoCreateForm(true);
    }

    return <div>
        <div>
            {!showTodoCreateForm && <Button onClick={updateForm}  >+Add a todo</Button>
            }
        </div>

        <div>
            {showTodoCreateForm && <div className="space-x-2 space-y-2">
                <h1 className="font-semibold text-lg dark:text-gray-200">Create a Todo</h1>
                <div className="flex space-x-2" >
                    <TodoCreator />
                    <Button onClick={() => updateShowTodoCreateForm(false)} theme="secondary">cancel</Button>
                </div>
            </div>}
        </div>
    </div>
};

TodoForm.defaultProps = {

}

export default TodoForm;

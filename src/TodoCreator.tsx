import { ChangeEvent, FC, memo, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { TODO_ADDED } from "./Actions/todos";
import Button from "./Button";
type TodoCreatorProps = {
    onSubmit: (data: string) => void;
}
const TodoCreator: FC<TodoCreatorProps> = ({ onSubmit }) => {
    const [inputValue, updateInputValue] = useState('');
    const [showTodoCreateForm, updateShowTodoCreateForm] = useState(false);
    const dispatch = useDispatch();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        updateInputValue(event.target.value)

    };




    const handleSubmit = () => {
        onSubmit(inputValue);
        updateInputValue("")
    };
    return < div >


        <input value={inputValue} onChange={handleChange} className="border border-gray-500 p-2 rounded-md" />
        <Button onClick={handleSubmit} >save</Button>

    </div >

};

TodoCreator.defaultProps = {

}

export default connect(undefined, { onSubmit: TODO_ADDED })(memo(TodoCreator));

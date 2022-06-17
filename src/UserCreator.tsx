import { ChangeEvent, FC, memo, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { USER_ADD } from "./Actions/users";
import Button from "./Button";
type TodoCreatorProps = {
    onSubmit: (data: string) => void;
}
const UserCreator: FC<TodoCreatorProps> = ({ onSubmit }) => {
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

UserCreator.defaultProps = {

}

export default connect(undefined, { onSubmit: USER_ADD })(memo(UserCreator));

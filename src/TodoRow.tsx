import { FC } from "react";
import { Todo } from "./models/Todo"
import cn from "classnames"
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { TODO_ADDED, TODO_MARKED_DONE, TODO_MARKED_UNDONE, TODO_DELETE } from './action';
import { useDispatch, useSelector } from "react-redux";
type TodoRowProps = {
    todo: Todo
}
const TodoRow: FC<TodoRowProps> = ({ todo }) => {
    const dispatch = useDispatch();

    const dispatcHandler = () => {
        if (done) {
            return dispatch(TODO_MARKED_UNDONE(id))
        }
        else {
            return dispatch(TODO_MARKED_DONE(id))
        }
    }


    const { id, data, done } = todo
    return <div>
        <div className='flex items-center' >
            <input onClick={dispatcHandler} checked={done} type="checkbox" />
            <div key={id}><span className={cn('mr-3 ml-3  dark:text-gray-200', { "line-through": done })}  >{data}</span></div>

            <div >

                <div >
                    <RiDeleteBin6Fill className='dark:bg-red-500' onClick={() => dispatch(TODO_DELETE(id))} />
                </div>
            </div>

        </div>
    </div>
};

TodoRow.defaultProps = {

}

export default TodoRow;

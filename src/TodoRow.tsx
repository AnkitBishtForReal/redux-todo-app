import { FC, useCallback } from "react";
import { Todo } from "./models/Todo"
import cn from "classnames"
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { TODO_ADDED, TODO_DELETE, TODO_STATUS_CHANGED } from './action';
import { useDispatch, useSelector } from "react-redux";
type TodoRowProps = {
    todo: Todo
}
const TodoRow: FC<TodoRowProps> = ({ todo }) => {
    const { id, data, done } = todo
    const dispatch = useDispatch();

    const dispatcHandler = () => {

        return dispatch(TODO_STATUS_CHANGED(id, done))



    }



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

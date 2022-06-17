import { FC, useCallback } from "react";
import { Todo } from "./models/Todo"
import cn from "classnames"
import { RiDeleteBin6Fill } from 'react-icons/ri';


type TodoRowProps = {
    todo: Todo;
    onStatuschange: (id: number, done: boolean) => void;
    onDelete: (id: number) => void;



};
const TodoRow: FC<TodoRowProps> = ({ todo, onStatuschange, onDelete }) => {
    const { id, data, done } = todo

    const handleChange = useCallback(() => {
        onStatuschange(id, done)
    }, [id, done]);

    const ondelete = useCallback(() => {
        onDelete(id)
    }, [id]);


    return <div>
        <div className='flex items-center' >
            <input onClick={handleChange} checked={done} type="checkbox" />
            <div key={id}><span className={cn('mr-3 ml-3  dark:text-gray-200', { "line-through": done })}  >{data}</span></div>

            <div >

                <div >
                    <RiDeleteBin6Fill className='dark:bg-red-500' onClick={ondelete} />
                </div>
            </div>

        </div>
    </div>
};

TodoRow.defaultProps = {

}

export default TodoRow;

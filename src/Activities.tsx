import React from "react";
import { RiDeleteBin6Fill } from 'react-icons/ri';
function Activities(props) {
    const onDelete = () => {
        props.onDelete(props.myActivity, props.done);
    }
    return (
        <div className='flex items-center ' >
            <input key={props.key} onChange={props.onChange} checked={props.checked} color={props.color} value={props.myActivity.id} type="checkbox" />
            <span className={'mr-3 ' + (props.done && 'line-through')}>{props.myActivity.title}</span>
            <div >
                <RiDeleteBin6Fill onClick={onDelete} />
            </div>
        </div>
    );
}
export default Activities;
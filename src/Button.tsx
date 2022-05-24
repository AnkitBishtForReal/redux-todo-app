import React from 'react';
function Button(props: any) {
    let themeClasses = 'bg-yellow-500 text-white rounded-lg ';
    if (props.theme === 'secondary') {
        themeClasses = 'bg-white border-slate-200'
    }

    return (
        <button onClick={props.onClick} className={"border px-5 py-5  rounded-md " + themeClasses} >{props.children}</button>
    );
}

export default Button;
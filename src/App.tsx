import React from 'react';
import Button from './Button';


import { TODO_ADDED, TODO_MARKED_DONE, TODO_MARKED_UNDONE, TODO_DELETE } from './action';
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Fill } from 'react-icons/ri';

import { donecountSelector, doneSelector, todosSelector, undonecountSelector } from "./selector";
import { RiMoonFill } from "react-icons/ri";
import TodoRow from './TodoRow';



function App() {

  const [showTodoCreateForm, updateShowTodoCreateForm] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const [inputValue, updateInputValue] = React.useState('');

  const dispatch = useDispatch();

  const updateForm = () => {
    updateShowTodoCreateForm(true);
  }


  const dispatchAdd = () => {
    dispatch(TODO_ADDED(inputValue));
    updateInputValue('')
    console.log("elem", list)
  }

  const list = useSelector((state: any) => state.todos);

  const doneNumber = useSelector(donecountSelector);

  const doneselect = useSelector(doneSelector);
  const undoneselect = useSelector(todosSelector);

  const undoneNumber = useSelector(undonecountSelector)


  return (<>

    <div className={` p-10  items-center justify-center bg-blue-500 flex-col 
    ${darkMode && "dark"}`}>
      <button className='flex item-center p-5' onClick={() => setDarkMode(!darkMode)} >      <RiMoonFill />Dark Mode</button>

      <div className="dark:bg-gray-800">

        <h1 className="border border-gray-700 text-xl font-semibold pl-6 dark:text-gray-200">XTodo</h1>
        <div className=' font-bold text-2xl pt-6 text-yellow-500 dark:text-gray-200'>complete todo:{doneNumber}</div>
        <div className=' font-bold text-2xl pt-6 text-red-500 dark:text-gray-200'>incomplete todo:{undoneNumber}</div>
        <div className="pl-6 space-y-4">
          <h1 className="font-bold text-2xl pt-6 dark:text-gray-200 ">Things to get done</h1>
          <h1 className="font-semibold text-lg dark:text-gray-200 ">Things to do</h1>
          <div className='flex flex-col' >
            <div>
              {!undoneNumber && <span>No Todos Here!</span>}
              {undoneselect.map((elem: any) => {
                return (<>
                  <TodoRow todo={elem} ></TodoRow>
                </>
                )

              })}

            </div>
            <div>
              {!showTodoCreateForm && <Button onClick={updateForm}  >+Add a todo</Button>
              }
            </div>
          </div>
          <div>
            {showTodoCreateForm && <div className="space-x-2 space-y-2">
              <h1 className="font-semibold text-lg dark:text-gray-200">Create a Todo</h1>
              <input value={inputValue} onChange={(event) => { updateInputValue(event?.target.value) }} className="border border-gray-500 p-2 rounded-md" />
              <Button onClick={dispatchAdd} >save</Button>
              <Button onClick={() => { updateShowTodoCreateForm(false) }} theme="secondary">cancel</Button>
            </div>
            }
          </div>
          <h1 className="font-semibold text-lg dark:text-gray-200">Things Done</h1>
          {!doneNumber && <span>No done Todos here!</span>}
          {doneselect.map((elem: any) => {
            return (<>
              <div className='flex items-center'>
                <input onClick={() => dispatch(TODO_MARKED_UNDONE(elem.id))} checked={elem.done} type="checkbox" />
                <div className='mr-3 ml-3 line-through' key={elem.id}><span className={'dark:text-gray-200'} >{elem.data}</span></div>

                <div >
                  <RiDeleteBin6Fill className='dark:bg-red-500' onClick={() => dispatch(TODO_DELETE(elem.id))} />
                </div>
              </div>

            </>
            )

          })}



        </div>
      </div>
    </div >
  </>
  );
}
export default App;



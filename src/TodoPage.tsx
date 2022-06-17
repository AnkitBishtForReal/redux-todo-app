import { FC, useState } from "react";
import { RiMoonFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import H3 from "./H3";
import { donecountSelector, undonecountSelector } from "./selectors/todos";
import TodoForm from "./TodoForm";
import { Completetodo, Incompletetodo } from "./TodoList";
type TodoPageProps = {}
const TodoPage: FC<TodoPageProps> = (props) => {

    const [darkMode, setDarkMode] = useState(false);









    const doneNumber = useSelector(donecountSelector);



    const undoneNumber = useSelector(undonecountSelector)

    return <div>

        <div>
            <div className={` p-10  items-center justify-center bg-blue-500 flex-col 
    ${darkMode && "dark"}`}>
                <button className='flex item-center p-5' onClick={() => setDarkMode(!darkMode)} >      <RiMoonFill />Dark Mode</button>

                <div className="dark:bg-gray-800">

                    <h1 className="border border-gray-700 text-xl font-semibold pl-6 dark:text-gray-200">XTodo</h1>
                    <div className=' font-bold text-2xl pt-6 text-yellow-500 dark:text-gray-200'>complete todo:{doneNumber}</div>
                    <div className=' font-bold text-2xl pt-6 text-red-500 dark:text-gray-200'>incomplete todo:{undoneNumber}</div>
                    <div className="pl-6 space-y-4">
                        <h1 className="font-bold text-2xl pt-6 dark:text-gray-200 ">Things to get done</h1>
                        <H3>Things to do</H3>
                        <div className='flex flex-col' >
                            <div>
                                {!undoneNumber && <span>No Todos Here!</span>}
                                <Incompletetodo />

                            </div>
                            <div>
                                <TodoForm />
                            </div>
                            <H3 >Things Done</H3>
                            {!doneNumber && <span>No done Todos here!</span>}
                            <Completetodo />

                        </div>
                    </div>
                </div >
            </div>
        </div>
    </div>
};

TodoPage.defaultProps = {

}

export default TodoPage;

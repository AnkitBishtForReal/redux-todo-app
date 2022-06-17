import { Link, Route, Routes } from "react-router-dom";
import TodoPage from "./TodoPage";
import Userspage from "./Userspage";








function App() {



  return (
    <>
      <div className="flex py-3 space-x-2 bg-green-500 rounded-md">
        <Link to="/" >Todos</Link>
        <Link to="/users" >users</Link>
      </div>
      <div>
        <Routes>
          <Route index element={<TodoPage />} />
          <Route path="/users" element={<Userspage />} />
        </Routes>
      </div>
    </>
  );
}
export default App;



import { FC } from "react";
import UserList from "./Actions/UserList";
import UserCreator from "./UserCreator";

type UserspageProps = {}
const Userspage: FC<UserspageProps> = (props) => {
    return <div>
        <UserCreator />
        <UserList />
    </div>
};

Userspage.defaultProps = {


}

export default Userspage;

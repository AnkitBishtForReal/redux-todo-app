import { FC } from "react";
import { User } from "../models/User";
type UserRowProps = {
    user: User;
}
const UserRow: FC<UserRowProps> = ({ user }) => {
    const { id, data } = user;
    console.log("data", data)
    return <div className="rounded-md p-2 bg-indigo-300">
        #{id}  {data}
    </div>
};

UserRow.defaultProps = {

}

export default UserRow;

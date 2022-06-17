import { FC, memo } from "react";
import { connect } from "react-redux";
import { User } from "../models/User";
import { userselector } from "../selectors/users";
import { State } from "../store";
import Userspage from "../Userspage";
import UserRow from "./UserRow";
type UserListProps = {
    users: User[]
}
const UserList: FC<UserListProps> = ({ users }) => {
    return <div className="space-y-3 p-2">
        {users.map(u => <UserRow key={u.id} user={u} />)}
    </div>
};

UserList.defaultProps = {

};
const mapStateToProps = (state: State) => ({
    users: userselector(state)
});
export default connect(mapStateToProps)(memo(UserList));

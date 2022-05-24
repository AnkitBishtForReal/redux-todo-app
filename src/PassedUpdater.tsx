import { FC } from "react";
import { useDispatch } from "react-redux";
import { TODO_ADDED, TODO_MARKED_DONE, TODO_MARKED_UNDONE } from './action'
import Button from "./Button";
type PassedUpdaterProps = {}
const PassedUpdater: FC<PassedUpdaterProps> = (props) => {

    const xyz = useDispatch();
    const updatedPassed = () => {
        xyz({ type: TODO_ADDED })
    }
    return <div>
        <Button onClick={updatedPassed}>Increased passed </Button>
    </div>
};

PassedUpdater.defaultProps = {

}

export default PassedUpdater;

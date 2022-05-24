import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TODO_ADDED, TODO_MARKED_DONE, TODO_MARKED_UNDONE } from './action'
import Button from "./Button";
import { donecountSelector, doneSelector } from "./selector";
type FailedUpdaterProps = {}
const FailedUpdater: FC<FailedUpdaterProps> = (props) => {
    const dispatch = useDispatch();



    const failedCount = useSelector(donecountSelector);
    const updatefailedCount = () => {
        dispatch({ type: "todo marked done" })
    }
    return <div>
        <Button theme="secondary" onClick={updatefailedCount}>save </Button>

    </div>
};

FailedUpdater.defaultProps = {

}

export default FailedUpdater;

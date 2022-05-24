import { FC } from "react";
import { useSelector } from "react-redux";
import { TODO_ADDED, TODO_MARKED_DONE, TODO_MARKED_UNDONE } from './action'
import { doneSelector } from "./selector";

type FailedDisplayerProps = {}
const FailedDisplayer: FC<FailedDisplayerProps> = (props) => {

    const failedCount = useSelector(doneSelector);
    return <div>
        Number of Student's failed : {failedCount}
    </div>
};

FailedDisplayer.defaultProps = {

}

export default FailedDisplayer;

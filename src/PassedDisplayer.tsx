import { FC } from "react";
import { useSelector } from "react-redux";
type PassedDisplayerProps = {}
const PassedDisplayer: FC<PassedDisplayerProps> = (props) => {

    const PassedSelector = (s: any) => s.passed
    const PassedCount = useSelector(PassedSelector)
    return <div>
        No of Student's Passed : {PassedCount}
    </div>
};

PassedDisplayer.defaultProps = {

}

export default PassedDisplayer;

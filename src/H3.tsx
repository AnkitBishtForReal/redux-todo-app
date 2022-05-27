import { FC, HTMLAttributes } from "react";
type H3Props = HTMLAttributes<HTMLHeadElement>
const H3: FC<H3Props> = ({ children }) => {
    return <h3 className="text-lg font-bold dark:text-gray-200" >{children}</h3>
};

H3.defaultProps = {

}

export default H3;

import type {FC} from 'react';

type KeypadRowProps = {
    children: React.ReactNode;
};

const KeypadRow: FC<KeypadRowProps> = ({children}) => <div className="h-[11vh] w-full flex">{children}</div>;

export default KeypadRow;

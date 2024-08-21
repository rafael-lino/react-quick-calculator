import type {FC} from 'react';

type KeypadRowProps = {
    children: React.ReactNode;
};

const KeypadRow: FC<KeypadRowProps> = ({children}) => <div className="quick-calculator_keypad__row">{children}</div>;

export default KeypadRow;

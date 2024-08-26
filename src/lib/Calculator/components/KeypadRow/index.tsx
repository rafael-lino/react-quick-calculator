import type {FC} from 'react';
import {twMerge} from 'tailwind-merge';

type KeypadRowProps = {
    children: React.ReactNode;
    className?: string;
};

const KeypadRow: FC<KeypadRowProps> = ({children, className}) => (
    <div className={twMerge('h-[8vh] w-full flex', className)}>{children}</div>
);

export default KeypadRow;

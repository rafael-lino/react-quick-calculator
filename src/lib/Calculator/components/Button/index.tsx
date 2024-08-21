import type {FC, HTMLProps, PropsWithChildren} from 'react';

import {cn} from '../../utils/cn';

type ButtonProps = PropsWithChildren<HTMLProps<HTMLButtonElement>>;
const Button: FC<ButtonProps> = ({children, type, onClick}) => {
    return (
        <button
            className={cn('quick-calculator_btn', type && `quick-calculator_btn--${type}`)}
            onClick={onClick}
            onKeyDown={e => console.log(e)}>
            {children}
        </button>
    );
};

export default Button;

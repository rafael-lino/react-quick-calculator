import type {FC, HTMLProps, PropsWithChildren} from 'react';

import {cn} from '../../utils/cn';

const getStyle = (type: string | undefined) => {
    switch (type) {
        case 'large':
            return 'w-[50%] text-stone-200 bg-rose-600 hover:bg-stone-200 hover:text-rose-600';
        case 'operator':
            return 'text-rose-600 bg-stone-200';
        default:
            return ' bg-stone-200 hover:bg-rose-600 hover:text-stone-200';
    }
};

type ButtonProps = PropsWithChildren<HTMLProps<HTMLButtonElement>>;
const Button: FC<ButtonProps> = ({children, type, onClick}) => {
    const style = getStyle(type);
    return (
        <button
            className={cn(
                'w-[25%] h-full text-3xl border outline-0 flex justify-center items-center transition-all duration-200 active:scale-95',
                style
            )}
            data-type={type}
            onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

import type {FC, HTMLProps, PropsWithChildren} from 'react';
import {twMerge} from 'tailwind-merge';

const getStyle = (type: string | undefined) => {
    switch (type) {
        case 'large':
            return 'w-[50%] text-gray-200 bg-gray-700';
        case 'operator':
            return 'text-gray-700 bg-gray-200 hover:bg-gray-700 hover:text-gray-200';
        default:
            return ' bg-gray-200 hover:bg-gray-700 hover:text-gray-200';
    }
};

type ButtonProps = PropsWithChildren<HTMLProps<HTMLButtonElement>>;
const Button: FC<ButtonProps> = ({children, type, onClick, className}) => {
    const style = getStyle(type);
    return (
        <button
            className={twMerge(
                'w-[25%] h-full text-3xl border outline-0 flex justify-center items-center transition-all duration-200 active:scale-95',
                style,
                className
            )}
            data-type={type}
            onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

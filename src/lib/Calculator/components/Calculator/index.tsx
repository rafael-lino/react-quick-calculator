import type {FC} from 'react';
import {twMerge} from 'tailwind-merge';

import {useLogic} from '../../useLogic';
import Keypad from '../Keypad';
import Screen from '../Screen';

type CalculatorProps = {
    className?: string;
    screenClassName?: string;
    keypadClassName?: string;
    resultScreenClassName?: string;
    computationScreenClassName?: string;
    keypadRowClassName?: string;
    buttonClassName?: string;
};
export const Calculator: FC<CalculatorProps> = ({
    className,
    screenClassName,
    keypadClassName,
    resultScreenClassName,
    keypadRowClassName,
    computationScreenClassName,
    buttonClassName,
}) => {
    const [{equation, result}, onClick] = useLogic();
    return (
        <main className={twMerge('h-full max-w-[20vw] w-full shadow-lg bg-white absolute', className)}>
            <Screen
                equation={equation}
                result={result}
                className={screenClassName}
                resultScreenClassName={resultScreenClassName}
                computationScreenClassName={computationScreenClassName}
            />
            <Keypad
                onClick={onClick}
                className={keypadClassName}
                keypadRowClassName={keypadRowClassName}
                buttonClassName={buttonClassName}
            />
        </main>
    );
};

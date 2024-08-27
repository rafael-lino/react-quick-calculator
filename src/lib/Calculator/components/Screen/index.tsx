import type {FC} from 'react';
import {twMerge} from 'tailwind-merge';

import ResultScreen from '../ResultScreen';
import ComputationScreen from '../ComputationScreen';

type ScreenProps = {
    result: number;
    equation: string;
    className?: string;
    resultScreenClassName?: string;
    computationScreenClassName?: string;
    error: boolean | undefined;
};

const Screen: FC<ScreenProps> = ({
    result,
    equation,
    error,
    className,
    resultScreenClassName,
    computationScreenClassName,
}) => (
    <section
        data-error={error}
        className={twMerge(
            'h-1/2 min-h-[15vh] w-full p-2 overflow-hidden whitespace-nowrap box-border text-gray-200 bg-gray-700',
            error && 'border-4 border-red-500',
            className
        )}>
        <ResultScreen className={resultScreenClassName}>{result}</ResultScreen>
        <ComputationScreen className={computationScreenClassName}>{equation}</ComputationScreen>
    </section>
);

export default Screen;

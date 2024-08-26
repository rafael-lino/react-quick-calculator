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
};

const Screen: FC<ScreenProps> = ({result, equation, className, resultScreenClassName, computationScreenClassName}) => (
    <section
        className={twMerge(
            'h-1/2 min-h-[15vh] w-full p-2 overflow-hidden whitespace-nowrap box-border text-gray-200 bg-gray-700',
            className
        )}>
        <ResultScreen className={resultScreenClassName}>{result}</ResultScreen>
        <ComputationScreen className={computationScreenClassName}>{equation}</ComputationScreen>
    </section>
);

export default Screen;

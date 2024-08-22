import type {FC} from 'react';

import ResultScreen from '../ResultScreen';
import ComputationScreen from '../ComputationScreen';

type ScreenProps = {
    result: number;
    equation: string;
};

const Screen: FC<ScreenProps> = ({result, equation}) => (
    <section className="h-[19vh] w-full px-2 py-0 overflow-hidden whitespace-nowrap box-border text-stone-200 bg-rose-600">
        <ResultScreen>{result}</ResultScreen>
        <ComputationScreen>{equation}</ComputationScreen>
    </section>
);

export default Screen;

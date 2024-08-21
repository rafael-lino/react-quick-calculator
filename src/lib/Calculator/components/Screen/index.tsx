import type {FC} from 'react';

import ResultScreen from '../ResultScreen';
import ComputationScreen from '../ComputationScreen';

type ScreenProps = {
    result: number;
    equation: string;
};

const Screen: FC<ScreenProps> = ({result, equation}) => (
    <section className="quick-calculator_screen">
        <ResultScreen>{result}</ResultScreen>
        <ComputationScreen>{equation}</ComputationScreen>
    </section>
);

export default Screen;

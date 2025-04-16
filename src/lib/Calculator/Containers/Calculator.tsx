import Mexp from 'math-expression-evaluator';
import type React from 'react';
import {useState} from 'react';

import Display from '../Components/Display';
import {useCopyToClipboard} from '../utils/useCopyToClipboard';
import Controls from './Controls';

const mexp = new Mexp();
const App: React.FC = () => {
    const [calculation, setCalculation] = useState<string[]>([]);
    const [sum, setSum] = useState<number>(0);
    const {copy, copied} = useCopyToClipboard();

    const calculate = (calculation: string[]) => {
        setCalculation(calculation);
    };

    const computeSum = (calculation: string) => {
        setSum(calculation.length === 0 ? 0 : mexp.eval(calculation));
    };

    return (
        <div className="qc-calculator">
            <Display calculation={calculation} sum={sum} copied={copied} onCopy={copy} />
            <Controls sum={sum} calculation={calculation} triggerSum={computeSum} triggerCalculation={calculate} />
        </div>
    );
};

export default App;

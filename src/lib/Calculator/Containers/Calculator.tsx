import type React from 'react';
import {useState} from 'react';
import {evaluate} from 'mathjs';

import Display from '../Components/Display';
import Controls from './Controls';
import {useCopyToClipboard} from '../utils/useCopyToClipboard';

const App: React.FC<{top?: number; left?: number}> = ({top, left}) => {
    const [calculation, setCalculation] = useState<string[]>([]);
    const [sum, setSum] = useState<number>(0);
    const {copy, copied} = useCopyToClipboard();

    const calculate = (calculation: string[]) => {
        setCalculation(calculation);
    };

    const computeSum = (calculation: string) => {
        setSum(calculation.length === 0 ? 0 : evaluate(calculation));
    };

    return (
        <div className="qc-calculator" style={{top, left}}>
            <Display calculation={calculation} sum={sum} copied={copied} onCopy={copy} />
            <Controls sum={sum} calculation={calculation} triggerSum={computeSum} triggerCalculation={calculate} />
        </div>
    );
};

export default App;

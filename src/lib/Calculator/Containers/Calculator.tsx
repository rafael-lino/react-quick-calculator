import Mexp from 'math-expression-evaluator';
import {useEffect, useRef, useState} from 'react';

import Display from '../Components/Display';
import {Calculate} from '../utils/calculate';
import {useKeyPress} from '../utils/useKeyPress';
import Controls from './Controls';

const mexp = new Mexp();
const Calculator = () => {
    const [expression, setExpression] = useState<string[]>([]);
    const [sum, setSum] = useState<number>(0);
    const calculatorRef = useRef<HTMLDivElement>(null);

    const computeExpression = (expression: string[]) => {
        setExpression(expression);
    };

    const computeSum = (expression: string) => {
        setSum(expression.length === 0 ? 0 : mexp.eval(expression));
    };

    const handleAction = (command: string) => {
        Calculate({
            command,
            sum,
            expression,
            computeExpression,
            computeSum,
        });
    };

    useKeyPress(calculatorRef, handleAction);

    useEffect(() => {
        calculatorRef.current?.focus();
    }, []);

    return (
        <div ref={calculatorRef} tabIndex={0} className="qc-calculator" onClick={() => calculatorRef.current?.focus()}>
            <Display calculation={expression} sum={sum} />
            <Controls onAction={handleAction} />
        </div>
    );
};

export default Calculator;

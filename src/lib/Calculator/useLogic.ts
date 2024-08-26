import type {MouseEvent} from 'react';
import {useCallback, useEffect, useState} from 'react';

import {KEY_CODE} from './utils/keys';

export function useLogic() {
    const [equation, setEquation] = useState<string>('');
    const [result, setResult] = useState<number>(0);
    const clear = () => {
        setEquation('');
        setResult(0);
    };

    const action = useCallback(
        (pressedButton: string) => {
            if (pressedButton === 'C') return clear();
            else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.')
                setEquation(prev => prev + pressedButton);
            else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1)
                setEquation(prev => `${prev}  ${pressedButton} `);
            else if (pressedButton === '=') {
                try {
                    const evalResult = eval(equation);
                    const result: number = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
                    setResult(result);
                } catch {
                    alert('Invalid Mathematical Equation');
                }
            } else {
                setEquation(prev => prev.trim().slice(0, prev.length - 1));
            }
        },
        [equation]
    );

    const onClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            action(event.currentTarget.innerHTML);
        },
        [action]
    );

    const onKeyPress = useCallback(
        (event: KeyboardEvent) => {
            if (KEY_CODE.has(event.code)) {
                action(KEY_CODE.get(event.code)!);
            }
        },
        [action]
    );

    useEffect(() => {
        document.body.addEventListener('keydown', onKeyPress);

        return () => document.body.removeEventListener('keydown', onKeyPress);
    }, [onKeyPress]);
    return [
        {
            equation,
            result,
        },
        onClick,
    ] as const;
}

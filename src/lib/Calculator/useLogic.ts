import type {MouseEvent} from 'react';
import {useCallback, useEffect, useState} from 'react';

import {KEY_CODE} from './utils/keys';

export function useLogic() {
    const [equation, setEquation] = useState<string>('');
    const [result, setResult] = useState<number>(0);
    const [isError, setIsError] = useState<boolean>(false);
    const clear = () => {
        setEquation('');
        setResult(0);
        setIsError(false);
    };

    const action = useCallback(
        (pressedButton: string) => {
            if (pressedButton === 'C') return clear();
            else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.')
                setEquation(prev => {
                    if (prev.includes('=')) return pressedButton;
                    return prev + pressedButton;
                });
            else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1)
                setEquation(prev => {
                    if (prev.includes('=')) return `${prev.slice(prev.indexOf('=') + 1)} ${pressedButton} `;
                    return `${prev} ${pressedButton} `;
                });
            else if (pressedButton === '=') {
                try {
                    const evalResult = Function('return ' + equation)();
                    const result: number = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
                    setResult(result);
                    setEquation(`= ${result}`);
                } catch {
                    setIsError(true);
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
        document.body.addEventListener('keydown', onKeyPress, false);

        return () => document.body.removeEventListener('keydown', onKeyPress, false);
    }, [onKeyPress]);
    return [
        {
            equation,
            result,
            isError,
        },
        onClick,
    ] as const;
}

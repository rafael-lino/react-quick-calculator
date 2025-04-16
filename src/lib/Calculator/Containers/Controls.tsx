import type React from 'react';
import {Fragment, useState} from 'react';

import Button from '../Components/Button';
import {useKeyPress} from '../utils/useKeyPress';
import {LAYOUT_KEYS} from '../utils/keys';

type ControlsProps = {
    triggerCalculation: (calculation: string[]) => void;
    triggerSum: (calculation: string) => void;
};

const Controls: React.FC<ControlsProps> = ({triggerCalculation, triggerSum}) => {
    const [calculation, setCalculation] = useState<string[]>([]);

    const handleAction = (value: string) => {
        switch (value) {
            case 'Delete':
                setCalculation([]);
                triggerCalculation([]);
                triggerSum('');
                break;

            case '=':
            case 'Enter': {
                if (isNaN(Number(calculation[calculation.length - 1]))) {
                    break;
                }
                const result = calculation.join('');
                triggerSum(result);
                setCalculation([]);
                triggerCalculation([]);
                break;
            }

            case 'posNeg': {
                const posNeg = [-1 * Number(calculation.join(''))];
                setCalculation(posNeg.map(String));
                triggerCalculation(posNeg.map(String));
                break;
            }

            case '%': {
                const percentage = [Number(calculation.join('')) * 0.01];
                setCalculation(percentage.map(String));
                triggerCalculation(percentage.map(String));
                break;
            }
            case 'Backspace': {
                const removeLast = [...calculation];
                removeLast.pop();
                setCalculation(removeLast);
                triggerCalculation(removeLast);
                break;
            }

            default:
                if (isNaN(Number(value)) && isNaN(Number(calculation[calculation.length - 1]))) {
                    break;
                }
                setCalculation([...calculation, value]);
                triggerCalculation([...calculation, value]);
                break;
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;
        handleAction(value);
    };

    useKeyPress(handleAction);

    return (
        <div className="qc-controls">
            {LAYOUT_KEYS.map(row => (
                <Fragment key={row.id}>
                    {row.cols.map(col => (
                        <Button
                            key={col.id}
                            name={col.label}
                            value={col.value}
                            color={col.color}
                            onClick={handleClick}
                        />
                    ))}
                </Fragment>
            ))}
        </div>
    );
};

export default Controls;

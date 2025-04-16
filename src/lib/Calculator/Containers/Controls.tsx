import type React from 'react';
import {Fragment} from 'react';

import Button from '../Components/Button';
import {useKeyPress} from '../utils/useKeyPress';
import {LAYOUT_KEYS, operators} from '../utils/keys';

type ControlsProps = {
    sum: number;
    calculation: string[];
    triggerCalculation: (calculation: string[]) => void;
    triggerSum: (calculation: string) => void;
};

const Controls: React.FC<ControlsProps> = ({sum, calculation, triggerCalculation, triggerSum}) => {
    const handleAction = (value: string) => {
        switch (value) {
            case 'Delete': {
                triggerCalculation([]);
                triggerSum('');
                break;
            }

            case '=':
            case 'Enter': {
                if (isNaN(Number(calculation[calculation.length - 1]))) {
                    break;
                }
                const result = calculation.join('');
                triggerSum(result);
                triggerCalculation([result]);
                break;
            }

            case 'posNeg': {
                const posNeg = [-1 * Number(calculation.join(''))];
                triggerCalculation(posNeg.map(String));
                break;
            }

            case '%': {
                const percentage = [Number(calculation.join('')) * 0.01];
                triggerCalculation(percentage.map(String));
                break;
            }
            case 'Backspace': {
                const removeLast = [...calculation];
                removeLast.pop();
                triggerCalculation(removeLast);
                break;
            }

            default:
                if (isNaN(Number(value)) && isNaN(Number(calculation[calculation.length - 1]))) {
                    if (operators.includes(value)) {
                        triggerCalculation([sum.toString(), value]);
                    }
                    break;
                }
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

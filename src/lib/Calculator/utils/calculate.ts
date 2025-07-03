import {operators} from './keys';

type CalculateArgs = {
    command: string;
    expression: string[];
    sum: number;
    computeExpression: (value: string[]) => void;
    computeSum: (value: string) => void;
};
export const Calculate = ({command, expression, sum, computeExpression, computeSum}: CalculateArgs) => {
    switch (command) {
        case 'Delete': {
            computeExpression([]);
            computeSum('');
            break;
        }

        case '=':
        case 'Enter': {
            if (isNaN(Number(expression[expression.length - 1]))) {
                break;
            }
            const result = expression.join('');
            computeSum(result);
            computeExpression([result]);
            break;
        }

        case 'posNeg': {
            const posNeg = [-1 * Number(expression.join(''))];
            computeExpression(posNeg.map(String));
            break;
        }

        case '%': {
            const percentage = [Number(expression.join('')) * 0.01];
            computeExpression(percentage.map(String));
            break;
        }
        case 'Backspace': {
            const removeLast = [...expression];
            removeLast.pop();
            computeExpression(removeLast);
            break;
        }

        default:
            if (isNaN(Number(command)) && isNaN(Number(expression[expression.length - 1]))) {
                if (operators.includes(command)) {
                    computeExpression([sum.toString(), command]);
                }
                break;
            }
            computeExpression([...expression, command]);
            break;
    }
};

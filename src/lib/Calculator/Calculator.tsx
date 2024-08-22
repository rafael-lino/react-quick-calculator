import Keypad from './components/Keypad';
import Screen from './components/Screen';
import {useLogic} from './useLogic';

const Calculator = () => {
    const [{equation, result}, onClick] = useLogic();

    return (
        <main className="h-full w-[50%] shadow-lg bg-white">
            <Screen equation={equation} result={result} />
            <Keypad onClick={onClick} />
        </main>
    );
};

export default Calculator;

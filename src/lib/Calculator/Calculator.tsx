import Keypad from './components/Keypad';
import Screen from './components/Screen';
import {useLogic} from './useLogic';
import './styles/styles.css';

const Calculator = () => {
    const [{equation, result}, onClick] = useLogic();

    return (
        <main className="quick-calculator">
            <Screen equation={equation} result={result} />
            <Keypad onClick={onClick} />
        </main>
    );
};

export default Calculator;

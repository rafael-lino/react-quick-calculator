import {useEffect, useState} from 'react';
import Draggable from 'react-draggable';

import '../index.css';
import {Calculator} from './components/Calculator';

type CalculatorProps = {
    className?: string;
    screenClassName?: string;
    keypadClassName?: string;
    keypadRowClassName?: string;
    buttonClassName?: string;
    resultScreenClassName?: string;
    computationScreenClassName?: string;
};
function DraggableCalculator(props: Readonly<CalculatorProps>) {
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.altKey && event.key === 'k') {
                setOpened(prev => !prev);
            }
        };
        document.body.addEventListener('keydown', handleKeyDown);

        return () => document.body.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <Draggable>
            <div>{opened ? <Calculator {...props} /> : null}</div>
        </Draggable>
    );
}

export default DraggableCalculator;

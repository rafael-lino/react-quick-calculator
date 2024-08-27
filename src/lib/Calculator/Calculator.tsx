import {useEffect, useRef, useState} from 'react';
import Draggable from 'react-draggable';

import '../index.css';
import {Calculator} from './components/Calculator';

type CalculatorProps = {
    initOpened?: boolean;
    className?: string;
    screenClassName?: string;
    keypadClassName?: string;
    keypadRowClassName?: string;
    buttonClassName?: string;
    resultScreenClassName?: string;
    computationScreenClassName?: string;
};
/**
 * @property {boolean} [initOpened=false] - Whether the calculator should be opened by default
 * @property {string | undefined} className - The class name for the calculator
 * @property {string | undefined} screenClassName - The class name for the screen
 * @property {string | undefined} keypadClassName - The class name for the keypad
 * @property {string | undefined} keypadRowClassName - The class name for the keypad row
 * @property {string | undefined} buttonClassName - The class name for the button
 * @property {string | undefined} resultScreenClassName - The class name for the result screen
 * @property {string | undefined} computationScreenClassName - The class name for the computation screen
 * @returns JSX.Element
 */
function DraggableCalculator({initOpened = false, ...props}: Readonly<CalculatorProps>) {
    const nodeRef = useRef(null);
    const [opened, setOpened] = useState(initOpened);
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
        <Draggable nodeRef={nodeRef} defaultClassNameDragging="cursor-grabbing">
            <div ref={nodeRef}>{opened ? <Calculator {...props} /> : null}</div>
        </Draggable>
    );
}

export default DraggableCalculator;

import {useEffect, useRef, useState} from 'react';
import Draggable from 'react-draggable';

import '../index.scss';
import Calculator from './Containers/Calculator';

type CalculatorProps = {
    initOpened?: boolean;
    top?: number;
    left?: number;
};
/**
 * @property {boolean} [initOpened=false] - Whether the calculator should be opened by default
 * @property {number} [top=undefined] - The top position of the calculator
 * @property {number} [left=undefined] - The left position of the calculator
 * @returns JSX.Element
 */
function DraggableCalculator({initOpened = false, ...props}: Readonly<CalculatorProps>) {
    const nodeRef = useRef(null);
    const [opened, setOpened] = useState(initOpened);
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.altKey && event.key === 'c') {
                setOpened(prev => !prev);
            }
            if (event.key === 'Escape') {
                setOpened(false);
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

import {useEffect, useRef, useState} from 'react';
import Draggable from 'react-draggable';

import '../index.scss';
import Calculator from './Containers/Calculator';

type CalculatorProps = {
    initOpened?: boolean;
};
/**
 * @property {boolean} [initOpened=false] - Whether the calculator should be opened by default
 * @returns JSX.Element
 */
function DraggableCalculator({initOpened = false}: Readonly<CalculatorProps>) {
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
            <div ref={nodeRef}>{opened ? <Calculator /> : null}</div>
        </Draggable>
    );
}

export default DraggableCalculator;

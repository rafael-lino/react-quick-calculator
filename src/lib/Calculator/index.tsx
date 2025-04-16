import {useRef} from 'react';
import Draggable from 'react-draggable';

import '../index.scss';
import Calculator from './Containers/Calculator';
import {useBounds} from './utils/useBounds';
import {useToggleCalculator} from './utils/useToggleCalculator';

type CalculatorProps = {
    initOpened?: boolean;
    x?: number;
    y?: number;
    className?: string;
};
/**
 * @property {boolean} [initOpened=false] - Whether the calculator should be opened by default
 * @property {number} [x=undefined] - The top position of the calculator
 * @property {number} [y=undefined] - The left position of the calculator
 * @returns JSX.Element
 */
function DraggableCalculator({initOpened = false, x, y, className}: Readonly<CalculatorProps>) {
    const nodeRef = useRef(null);
    const opened = useToggleCalculator(initOpened);
    const bounds = useBounds();

    return (
        <Draggable
            nodeRef={nodeRef}
            defaultClassNameDragging="cursor-grabbing"
            defaultPosition={{x: x ?? 0, y: y ?? 0}}
            bounds={bounds}
            defaultClassName={`qc-container ${className ?? ''}`}>
            <div ref={nodeRef}>{opened ? <Calculator /> : null}</div>
        </Draggable>
    );
}

export default DraggableCalculator;

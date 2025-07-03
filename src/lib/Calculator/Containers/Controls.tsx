import type React from 'react';
import {Fragment, memo} from 'react';

import Button from '../Components/Button';
import {LAYOUT_KEYS} from '../utils/keys';

type ControlsProps = {
    onAction: (value: string) => void;
};

const Controls: React.FC<ControlsProps> = memo(({onAction}) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;
        onAction(value);
    };

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
});
Controls.displayName = 'Controls';

export default Controls;

import type {FC, MouseEvent} from 'react';

import KeypadRow from '../KeypadRow';
import Button from '../Button';
import {LAYOUT_KEYS} from '../../utils/keys';

type KeypadProps = {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Keypad: FC<KeypadProps> = ({onClick}) => {
    return (
        <section className="quick-calculator_keypad">
            {LAYOUT_KEYS.map(({row, id}) => (
                <KeypadRow key={id}>
                    {row.map(item => (
                        <Button key={item.id} type={item.type} onClick={onClick}>
                            {item.label}
                        </Button>
                    ))}
                </KeypadRow>
            ))}
        </section>
    );
};

export default Keypad;

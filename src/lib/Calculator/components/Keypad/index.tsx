import type {FC, MouseEvent} from 'react';
import {twMerge} from 'tailwind-merge';

import KeypadRow from '../KeypadRow';
import Button from '../Button';
import {LAYOUT_KEYS} from '../../utils/keys';

type KeypadProps = {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    keypadRowClassName?: string;
    buttonClassName?: string;
};

const Keypad: FC<KeypadProps> = ({onClick, className, keypadRowClassName, buttonClassName}) => {
    return (
        <section className={twMerge('h-full w-full', className)}>
            {LAYOUT_KEYS.map(({row, id}) => (
                <KeypadRow key={id} className={keypadRowClassName}>
                    {row.map(item => (
                        <Button key={item.id} type={item.type} onClick={onClick} className={buttonClassName}>
                            {item.label}
                        </Button>
                    ))}
                </KeypadRow>
            ))}
        </section>
    );
};

export default Keypad;

import type {RefObject} from 'react';
import {useCallback, useEffect} from 'react';

import {IsNumberOrAllowedKey} from './keys';

export function useKeyPress(ref: RefObject<HTMLElement>, cb: (code: string) => void) {
    const handleKeyPress = useCallback(
        (event: KeyboardEvent) => {
            if (IsNumberOrAllowedKey(event.key)) {
                cb(event.key);
            }
        },
        [cb]
    );
    useEffect(() => {
        const element = ref.current;
        element?.addEventListener('keydown', handleKeyPress, false);

        return () => {
            element?.removeEventListener('keydown', handleKeyPress, false);
        };
    }, [handleKeyPress, ref]);
}

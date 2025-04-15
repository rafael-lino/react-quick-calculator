import {useCallback, useEffect} from 'react';

import {IsNumberOrAllowedKey} from './keys';

export function useKeyPress(cb: (code: string) => void) {
    const handleKeyPress = useCallback(
        (event: KeyboardEvent) => {
            if (IsNumberOrAllowedKey(event.key)) {
                cb(event.key);
            }
        },
        [cb]
    );
    useEffect(() => {
        document.body.addEventListener('keydown', handleKeyPress, false);

        return () => document.body.removeEventListener('keydown', handleKeyPress, false);
    }, [handleKeyPress]);
}

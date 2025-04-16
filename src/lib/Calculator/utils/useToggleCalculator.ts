import {useEffect, useState} from 'react';

export function useToggleCalculator(initOpened: boolean) {
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

    return opened;
}

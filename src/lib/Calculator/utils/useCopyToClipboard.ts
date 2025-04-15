import {useEffect, useState} from 'react';

export function useCopyToClipboard() {
    const [copied, setCopied] = useState(false);

    const copy = (value: unknown) => {
        if (value && typeof value === 'number') {
            navigator.clipboard.writeText(value.toString());
            setCopied(true);
        }
    };

    useEffect(() => {
        if (copied) {
            const timeout = setTimeout(() => {
                setCopied(false);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [copied]);

    return {copy, copied};
}

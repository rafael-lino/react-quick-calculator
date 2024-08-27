import {useEffect, useState, type FC} from 'react';
import {twMerge} from 'tailwind-merge';

type ResultScreenProps = {
    children: React.ReactNode;
    className?: string;
};

const ResultScreen: FC<ResultScreenProps> = ({children, className}) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        if (children && typeof children === 'number') {
            navigator.clipboard.writeText(children.toString());
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
    return (
        <div className={twMerge('h-1/2 text-7xl font-semibold flex justify-end items-end', className)}>
            {copied && <span className="text-sm self-center mx-2 transition-opacity">copied!</span>}
            <button onClick={handleCopy}>{children}</button>
        </div>
    );
};

export default ResultScreen;

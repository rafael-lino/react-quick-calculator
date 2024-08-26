import type {FC} from 'react';
import {twMerge} from 'tailwind-merge';

type ResultScreenProps = {
    children: React.ReactNode;
    className?: string;
};

const ResultScreen: FC<ResultScreenProps> = ({children, className}) => (
    <div className={twMerge('h-1/2 text-7xl font-semibold flex justify-end items-end', className)}>{children}</div>
);

export default ResultScreen;

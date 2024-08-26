import type {FC} from 'react';
import {twMerge} from 'tailwind-merge';

type ComputationScreenProps = {
    children: React.ReactNode;
    className?: string;
};

const ComputationScreen: FC<ComputationScreenProps> = ({children, className}) => (
    <div className={twMerge('h-1/2 text-3xl flex justify-end items-center', className)}>{children}</div>
);

export default ComputationScreen;

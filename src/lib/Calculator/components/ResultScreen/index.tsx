import type {FC} from 'react';

type ResultScreenProps = {
    children: React.ReactNode;
};

const ResultScreen: FC<ResultScreenProps> = ({children}) => (
    <div className="h-1/2 text-7xl font-semibold flex justify-end items-end">{children}</div>
);

export default ResultScreen;

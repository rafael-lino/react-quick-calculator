import type {FC} from 'react';

type ResultScreenProps = {
    children: React.ReactNode;
};

const ResultScreen: FC<ResultScreenProps> = ({children}) => (
    <div className="quick-calculator_result-screen">{children}</div>
);

export default ResultScreen;

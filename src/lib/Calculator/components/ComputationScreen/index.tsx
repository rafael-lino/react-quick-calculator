import type {FC} from 'react';

type ComputationScreenProps = {
    children: React.ReactNode;
};

const ComputationScreen: FC<ComputationScreenProps> = ({children}) => (
    <div className="quick-calculator_computation-screen">{children}</div>
);

export default ComputationScreen;

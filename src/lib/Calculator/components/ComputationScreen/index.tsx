import type {FC} from 'react';

type ComputationScreenProps = {
    children: React.ReactNode;
};

const ComputationScreen: FC<ComputationScreenProps> = ({children}) => (
    <div className="h-1/2 text-3xl flex justify-end items-center">{children}</div>
);

export default ComputationScreen;

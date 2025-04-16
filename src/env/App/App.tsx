import type {FC} from 'react';

import './index.css';
import {Calculator} from '@/lib';

const App: FC = () => {
    return (
        <div style={{width: '99vw', height: '96vh'}}>
            <Calculator x={736} y={167} />
        </div>
    );
};

export default App;

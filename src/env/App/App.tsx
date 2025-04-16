import type {FC} from 'react';

import './index.css';
import {Calculator} from '@/lib';

const App: FC = () => {
    return (
        <div style={{width: '80vw', height: '80vh'}}>
            <Calculator />
        </div>
    );
};

export default App;

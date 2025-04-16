import type {FC} from 'react';

import './index.css';
import {Calculator} from '@/lib';

const App: FC = () => {
    return (
        <div style={{width: '100vh'}}>
            <Calculator />
        </div>
    );
};

export default App;

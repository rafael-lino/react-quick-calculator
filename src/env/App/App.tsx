import type {FC} from 'react';

import {Calculator} from '@/lib';
import './index.css';

const App: FC = () => {
    return (
        <div style={{width: '100vh'}}>
            <Calculator />
        </div>
    );
};

export default App;

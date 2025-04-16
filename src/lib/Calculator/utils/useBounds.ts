import {useEffect, useState} from 'react';

/**
 * 
    calculator width = 330px
    calculator height = 480px
    calculator width offset = 10px
    calculator height offset = 30px
 */
const getBouds = () => {
    return {
        top: 0,
        left: 0,
        right: window.innerWidth - 340,
        bottom: window.innerHeight - 510,
    };
};
export function useBounds() {
    const [bounds, setBounds] = useState({top: 0, left: 0, right: 0, bottom: 0});

    useEffect(() => {
        const updateBounds = () => setBounds(getBouds());
        updateBounds();
        window.addEventListener('resize', updateBounds);
        return () => {
            window.removeEventListener('resize', updateBounds);
        };
    }, []);

    return bounds;
}

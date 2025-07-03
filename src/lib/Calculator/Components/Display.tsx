import {useCopyToClipboard} from '../utils/useCopyToClipboard';

const Display = ({calculation, sum}: {calculation: string[]; sum: number}) => {
    const {copy, copied} = useCopyToClipboard();

    const handleClick = () => copy(sum);

    return (
        <div className="qc-display">
            <div className="qc-display__current">{calculation}</div>
            <div className="qc-display__result">
                {copied ? <span className="qc-display__label">copied!</span> : null}
                <button tabIndex={-1} className="qc-display__number" onClick={handleClick}>
                    {sum}
                </button>
            </div>
        </div>
    );
};

export default Display;

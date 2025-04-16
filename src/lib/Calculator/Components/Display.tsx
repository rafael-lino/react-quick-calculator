const Display = ({
    calculation,
    sum,
    copied,
    onCopy,
}: {
    calculation: string[];
    sum: number;
    copied: boolean;
    onCopy: (value: number) => void;
}) => {
    return (
        <div className="qc-display">
            <div className="qc-display__current">{calculation}</div>
            <div role="button" className="qc-display__result" onClick={() => onCopy(sum)} tabIndex={0}>
                {copied ? <span className="qc-display__label">copied!</span> : null}
                <span className="qc-display__number">{sum}</span>
            </div>
        </div>
    );
};

export default Display;

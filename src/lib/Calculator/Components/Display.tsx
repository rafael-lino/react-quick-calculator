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
            <div className="qc-display__result">
                {copied ? <span className="qc-display__label">copied!</span> : null}
                <span autoFocus role="button" className="qc-display__number" onClick={() => onCopy(sum)} tabIndex={0}>
                    {sum}
                </span>
            </div>
        </div>
    );
};

export default Display;

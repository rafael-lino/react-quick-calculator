import type React from 'react';

type ButtonProps = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    name: string;
    value: string;
    color?: string; // Optional prop for color
};

const Button: React.FC<ButtonProps> = props => {
    const styles = `qc-controls__item ${props.color ?? ''}`; // Default to an empty string if color is not provided

    return (
        <button onClick={props.onClick} className={styles} value={props.value}>
            {props.name}
        </button>
    );
};

export default Button;

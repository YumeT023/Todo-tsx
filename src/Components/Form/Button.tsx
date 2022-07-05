import React from "react";
import ButtonI from "../../Models/button.interface";

export const Button: React.FC<ButtonI> = ({label, color, onClick, disabled}): JSX.Element => {
    return (
        <button onClick={onClick} className={color} disabled={disabled}>
            {label}
        </button>
    );
}
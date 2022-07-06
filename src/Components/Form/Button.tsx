import React from "react";
import ButtonI from "../../Models/button.interface";

export const Button: React.FC<ButtonI> = ({label, color, onClick, disabled, type = 'button'}) => {
    return (
        <button onClick={onClick}
                className={`Button ${color}`}
                type={type}
                disabled={disabled}>
            {label}
        </button>
    );
}
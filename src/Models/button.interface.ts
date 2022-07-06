import React from "react";
import { StatusT } from "./list.model";

export default interface ButtonI {
    label: string;
    color?: string;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
    onClick?: () => void
}
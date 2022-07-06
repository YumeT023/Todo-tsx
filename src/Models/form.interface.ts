import React from 'react';
import { ItemI, StatusT } from './list.model';

export interface FormSectionI {
    label: string;
    title: string;
    children?: import('react').ReactNode;
}

export interface EditI {
    isActive: boolean;
    mode?: string;
    confirmLabel?: string;
    item?: ItemI;
    handleEdit?: (idItem?: number, newItem?: ItemI) => void;
    onCancel?: () => void;
}
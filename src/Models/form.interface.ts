import { ItemI } from './list.model';

export interface FormSectionI {
    label: string;
    title: string;
    children?: import('react').ReactNode;
}

export interface OptionI {
    label: string;
    status: boolean;
}

export interface EditI {
    isActive: boolean;
    mode?: string;
    item?: ItemI;
}
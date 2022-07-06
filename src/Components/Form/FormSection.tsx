import React from 'react';
import { FormSectionI } from '../../Models/form.interface';

export const FormSection: React.FC<FormSectionI> = ({label, title, children}) => {
    return (
        <section className="FormSection">
            <h4 className="form-title">{label} <u>{title}</u></h4>
            {children}
        </section>
    );
}
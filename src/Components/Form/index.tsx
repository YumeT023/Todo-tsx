import React, { useState } from 'react';
import { FormSection } from './FormSection';
import { Button } from "./Button";
import './style.css';

export const Form: React.FC<{mode?: string}> = ({mode}) => {
    const [formValue, setFormValue] = useState({
        title: '',
        description: '',
        status: '0'
    });

    const handleChange = (e: React.BaseSyntheticEvent) => {
        const { value, name } = e.target;
        setFormValue({...formValue, [name]: value});
    }

    return (
        <div className="Form">
            <form spellCheck={false}>
                <FormSection label="Enter a" title="title">
                    <input type="text" name="title"
                           value={formValue.title}
                           onChange={handleChange}
                    />
                </FormSection>

                <FormSection label={`(${formValue.description.length}/120) Enter a`} title="description">
                    <textarea name="description" value={formValue.description}
                              cols={35} rows={5} spellCheck={false}
                              onChange={handleChange}
                              maxLength={120}
                    ></textarea>
                </FormSection>

                <FormSection label="Select its" title="status">
                    <select name="status" value={formValue.status} onChange={handleChange}>
                        <option value="0">in progress...</option>
                        <option value="1">done</option>
                    </select>
                </FormSection>

                <FormSection label="Confirm or cancel your" title="change">
                    <Button label="Cancel"  color="success" />
                    <Button label="Save" color="error" />
                </FormSection>
            </form>
        </div>
    )
}
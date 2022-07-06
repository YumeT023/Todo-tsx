import React, { useState } from 'react';
import { FormSection } from './FormSection';
import { Button } from "./Button";
import './style.css';
import { CheckOptions } from './CheckOption';
import { EditI } from '../../Models/form.interface';
import { ItemI } from '../../Models/list.model';
import { useEffect } from 'react';

const INITIAL_ITEM: ItemI = {
    idItem: 0,
    title: '',
    description: '',
    status: "TODO"
}

export const Form: React.FC<EditI> = ({isActive, item = INITIAL_ITEM, mode}) => {
    const [formValue, setFormValue] = useState<ItemI>(item);

    const handleChange = (e: React.BaseSyntheticEvent) => {
        const { value, name } = e.target;
        setFormValue({...formValue, [name]: value});
    }

    useEffect(() => setFormValue(item), [item])

    return (
        <div className={`Form ${!isActive && 'hide'}`}>

            <form spellCheck={false}>
                <FormSection label="Enter a" title="title">

                    <input type="text" name="title"
                           value={formValue.title}
                           onChange={handleChange}
                    />

                </FormSection>

                <FormSection label={`(${formValue.description.slice(0, 120).length}/120) Enter a`} title="description">

                    <textarea name="description" 
                              value={formValue.description.slice(0, 120)}
                              cols={35} rows={5} 
                              spellCheck={false}
                              onChange={handleChange}
                              maxLength={120}
                    ></textarea>

                </FormSection>

                <FormSection label="Select its" title="status">

                    <CheckOptions labels={["TODO", "DOING", "DONE", "DONE", "DONE", "DONE"]}/>

                </FormSection>

                <FormSection label="Confirm or cancel your" 
                             title="change"
                >

                    <Button label="Cancel"  color="success" />
                    <Button label="Save" color="error" />

                </FormSection>
            </form>

        </div>
    )
}
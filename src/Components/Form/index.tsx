import React, { useState } from 'react';
import './style.css';
import { FormSection } from './FormSection';
import { Button } from "./Button";
import { EditI } from '../../Models/form.interface';
import { ItemI, StatusT } from '../../Models/list.model';
import { useEffect } from 'react';
import { INITIAL_ITEM } from '../../App';

export const Form: React.FC<EditI> = ({ isActive, item, confirmLabel, handleEdit, onCancel}) => {

    const [formValue, setFormValue] = useState<ItemI>(INITIAL_ITEM);
    const [status, setStatus] = useState<StatusT>();
    const [isValid, setIsValid] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValue(() => (
            {...formValue, [name]: value}
        ));
    }

    useEffect(() => {
        if (item) {
            setFormValue(item);
            setStatus(item.status);
        }
    }, [item]);

    useEffect(() => {
        const {title, status} = formValue;

        title.trim() === '' || !status ? (
            setIsValid(false)
        ): setIsValid(true);

    }, [formValue])


    const reinitialize = () => setFormValue(INITIAL_ITEM);

    const handleStatusChange = (status: StatusT): void => {
        setStatus(status);
        setFormValue(() => {
            return {...formValue, status}
        })
    }

    const handleConfirm = () => {
        handleEdit!(formValue.idItem, formValue)
        reinitialize()
    }

    const handleCancel = () => {
        onCancel!();
        reinitialize();
    }

    return (
        <div className={`Form ${!isActive && 'hide'}`}>

            <form spellCheck={false}>
                <FormSection label="Enter a" title="title">

                    <input type="text" name="title"
                        value={formValue.title}
                        onChange={handleChange}
                    />

                </FormSection>

                <FormSection 
                    label={`(${formValue.description.slice(0, 120).length}/120) Enter a`} 
                    title="description"
                >

                    <textarea 
                        name="description"
                        value={formValue.description.slice(0, 120)}
                        cols={35} rows={5}
                        spellCheck={false}
                        onChange={handleChange}
                        maxLength={120}
                    ></textarea>

                </FormSection>

                <FormSection label="Select its" title="status">

                    <div className="CheckOptions">
                        {
                            Array<StatusT>('TODO', 'DOING', 'DONE').map((o, index) => {
                                return (
                                    <Button 
                                        label={o}
                                        key={index}
                                        color={o === status ? 'success' : ''}
                                        onClick={() => handleStatusChange(o)}
                                    />
                                )
                            })
                        }
                    </div>

                </FormSection>

                <FormSection label="Confirm or cancel your"
                    title="change"
                >

                    <Button label="Cancel" color="success" onClick={handleCancel} />
                    <Button label={confirmLabel!} color="error" onClick={handleConfirm} disabled={!isValid} />

                </FormSection>
            </form>

        </div>
    )
}
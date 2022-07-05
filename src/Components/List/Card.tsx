import React from 'react'
import { isTemplateSpan } from 'typescript';
import { ItemI } from '../../Models/list.interface';

export const Card: React.FC<ItemI> = ({title, description, status}) => {
    return (
        <div className="Card">
            <h3>{title}</h3>
            <p>{description}</p>
            <small>{status}</small>
        </div>
    );
}
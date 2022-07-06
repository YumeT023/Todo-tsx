import React from 'react';
import { MainListI } from '../../Models/list.model';
import { Column } from './Column';
import { getItemsByStatus } from "../../Operations/fn.helper";
import './style.css';

export const List: React.FC<MainListI> = ({full, items, handleEdit, handleDelete}) => {

    return (
        <div className={`List ${full && 'full'}`}>

            <main>

                <Column label='TODO' items={getItemsByStatus(items, "TODO")} handle={handleEdit} handleDelete={handleDelete} />

                <Column label='DOING' items={getItemsByStatus(items, "DOING")} handle={handleEdit} handleDelete={handleDelete} />

                <Column label='DONE' items={getItemsByStatus(items, "DONE")} handle={handleEdit} handleDelete={handleDelete} />

            </main>

        </div>
    );
}
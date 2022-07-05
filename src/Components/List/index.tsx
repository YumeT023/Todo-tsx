import React from 'react';
import { ItemI } from '../../Models/list.interface';
import { Column } from './Column';
import { getItemsByStatus } from "./fn.helper";
import './style.css';

export const List: React.FC<{}> = () => {
    const ITEMS: Array<ItemI> = [
        {
            idItem: 1,
            title: "nothing",
            description: "there is no description",
            status: "TODO"
        },
        {
            idItem: 1,
            title: "nothing",
            description: "there is no description",
            status: "DOING"
        },
        {
            idItem: 1,
            title: "nothing",
            description: "there is no description",
            status: "DONE"
        },
        {
            idItem: 1,
            title: "nothing",
            description: "there is no description",
            status: "DOING"
        },
        {
            idItem: 1,
            title: "nothing",
            description: "there is no description",
            status: "DOING"
        },
        {
            idItem: 1,
            title: "nothing",
            description: "there is no description",
            status: "TODO"
        },
        {
            idItem: 1,
            title: "nothing",
            description: "there is no description",
            status: "DOING"
        },
        {
            idItem: 1,
            title: "nothing",
            description: "there is no description",
            status: "DOING"
        },
        {
            idItem: 1,
            title: "nothing",
            description: "there is no description",
            status: "DOING"
        },
        {
            idItem: 1,
            title: "nothing",
            description: "there is no description",
            status: "TODO"
        },
        {
            idItem: 1,
            title: "nothing",
            description: "there is no description",
            status: "DOING"
        },
        {
            idItem: 1,
            title: "nothing",
            description: "there is no description",
            status: "DONE"
        },
        {
            idItem: 1,
            title: "nothing",
            description: "there is no description",
            status: "DOING"
        }
    ]

    return (
        <div className="List">

            <main>

                <Column label='TODO' items={getItemsByStatus(ITEMS, "TODO")} />

                <Column label='DOING' items={getItemsByStatus(ITEMS, "DOING")} />

                <Column label='DONE' items={getItemsByStatus(ITEMS, "DONE")} />

            </main>

        </div>
    );
}
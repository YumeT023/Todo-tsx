import React, { useState } from 'react';
import './App.css';
import { Form } from './Components/Form';
import { List } from './Components/List';
import { EditI } from './Models/form.interface';
import { ItemI } from './Models/list.model';

const ITEMS: Array<ItemI> = [
    {
        idItem: 1,
        title: "nothing",
        description: "there is no description",
        status: "TODO"
    },
    {
        idItem: 2,
        title: "nothing",
        description: "there is no description",
        status: "DOING"
    },
    {
        idItem: 3,
        title: "other",
        description: "there is no description",
        status: "DONE"
    },
    {
        idItem: 4,
        title: "onm",
        description: "there is no description",
        status: "DOING"
    },
    {
        idItem: 5,
        title: "nothing",
        description: "there is no description",
        status: "DOING"
    },
    {
        idItem: 6,
        title: "nothing",
        description: "there is no description",
        status: "TODO"
    },
    {
        idItem: 7,
        title: "nothing",
        description: "there is no description",
        status: "DOING"
    },
    {
        idItem: 8,
        title: "nothing",
        description: "there is no description",
        status: "DOING"
    },
    {
        idItem: 9,
        title: "nothing",
        description: "there is no description",
        status: "DOING"
    },
    {
        idItem: 10,
        title: "nothing",
        description: "This is the long description of the first of and the last one that i've never heard ever and never saw how his real face was, his nickname is more popular than his real oneddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
        status: "TODO"
    },
    {
        idItem: 11,
        title: "nothing",
        description: "there is no description",
        status: "DOING"
    },
    {
        idItem: 12,
        title: "nothing",
        description: "there is no description",
        status: "DONE"
    },
    {
        idItem: 13,
        title: "nothing",
        description: "there is no description",
        status: "DOING"
    }
]

export const App: React.FC = () => {
    const [items, setItems] = useState<ItemI[]>(ITEMS);
    const [edit, setEdit] = useState<EditI>({
        isActive: false
    });

    const handleActiveEdit = (idItem: number): void => {

        const item = items.find(item => item.idItem == idItem);

        console.log(item);

        setEdit({
            ...edit,
            item,
            isActive: true
        })
    }

    return (
        <div className="App">

            <header>
                <h3>Todo List</h3>
            </header>

            <main>
                <Form {...edit} />
                <List full={!edit.isActive} items={items} handleEdit={handleActiveEdit} />
            </main>

        </div>
    );
}

export default App;
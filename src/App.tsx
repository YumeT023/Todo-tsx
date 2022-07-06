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

const ITEM_TEMPLATE = {
    idItem: null,
	title: '',
	description: '',
	status: 'TODO'
}

export const App: React.FC = () => {
    const [items, setItems] = useState<ItemI[]>(ITEMS);
    const [edit, setEdit] = useState<EditI>({
        mode: "add",
        isActive: false
    });

    const setEditMode = (idItem?: number) => {
        if (idItem) {
            const item = items.find(item => item.idItem === idItem);
            setEdit({...edit, item, mode: 'update', isActive: true});
            return ;
        }
        setEdit({...edit, mode: 'add', isActive: true})
    }

    const handleOnSave = (newItem: ItemI, idItem?: number) => {
        let tmp = [...items];
        newItem.lastEdit = new Date().toDateString();
        
        if (!idItem) {
            newItem.idItem = tmp[tmp.length - 1].idItem + 1;
            tmp = [...items, newItem];
        } else {
            tmp = tmp.map(item => (
                item.idItem === idItem ? (
                    item = newItem
                ): item)
            );
        }

        setItems(tmp);
        setEdit({...edit, isActive: false})
    }

    const handleActiveEdit = (idItem?: number, newItem?: ItemI): void => {
        !newItem ? (
            setEditMode(idItem)
        ): handleOnSave(newItem, idItem);
    }

    return (
        <div className="App">

            <header>
                <h3>Todo List</h3>
                <div className="add-icon">
                    <i className="fas fa-plus"
                        title='add task'
                        onClick={() => handleActiveEdit()}
                    ></i>
                </div>
            </header>

            <main>
                <Form {...edit} handleEdit={handleActiveEdit} onCancel={() => setEdit({...edit, isActive: false})} confirmLabel={edit.mode} />
                <List full={!edit.isActive} items={items} handleEdit={handleActiveEdit} />
            </main>

        </div>
    );
}

export default App;
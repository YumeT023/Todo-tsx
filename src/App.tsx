import React from 'react';
import './App.css';
import { Form } from './Components/Form';
import { List } from './Components/List';

export const App = () => {
    return (
        <div className="App">

            <header>
                <h3>Todo List</h3>
            </header>

            <main>
                <Form />
                <List />
            </main>

        </div>
    );
}

export default App;
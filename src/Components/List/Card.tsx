import React from 'react'
import { CardI } from '../../Models/Card.interface';

export const Card: React.FC<CardI> = ({item, handle, onDelete}) => {

    const {title, description, lastEdit} = item;

    return (
        <div className="Card">

            <main>

                <div className="card-header">
                    <h3>{title}</h3>
                </div>

                <div className="card-content">
                    {
                        description ? (
                            <p>{description.slice(0, 120)}</p>
                        ): <p className='card-footer'>no description</p>
                    }
                </div>

                <div className="card-footer">
                    <small>
                        {
                            lastEdit ? (
                                <i>last edit: {lastEdit}</i>
                            ): <i>not edited</i>
                        }
                    </small>
                </div>

                <div className="card-delete">
                    <i className="fas fa-trash"
                        title='add task'
                        onClick={() => onDelete(item.idItem)}
                    ></i>

                    <i className="fas fa-edit"
                        title='add task'
                        onClick={() => handle(item.idItem)}
                    ></i>
                </div>
            </main>
        </div>
    );
}
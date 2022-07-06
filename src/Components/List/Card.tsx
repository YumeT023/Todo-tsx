import React from 'react'
import { CardI } from '../../Models/Card.interface';

export const Card: React.FC<CardI> = ({item, handle}) => {

    const {title, description, status, lastEdit} = item;

    return (
        <div className="Card" onClick={() => handle(item.idItem)} >

            <main>

                <div className="card-header">
                    <h3>{title}</h3>
                </div>


                <div className="card-content">
                    <p>{description.slice(0, 120)}</p>
                </div>

                <div className="card-footer">
                    <small>
                        <i>last edit {lastEdit}</i>
                    </small>
                </div>
            </main>
        </div>
    );
}
import React from 'react'
import { CardI } from '../../Models/Card.interface';

export const Card: React.FC<CardI> = ({item, handle}) => {

    const {title, description, lastEdit} = item;

    return (
        <div className="Card" onClick={() => handle(item.idItem)} >

            <main>

                <div className="card-header">
                    <h3>{title}</h3>
                </div>


                <div className="card-content">
                    {
                        description ? (
                            <p>{description.slice(0, 20)}</p>
                        ): <p className='card-footer'>no description</p>
                    }
                </div>

                <div className="card-footer">
                    <small>
                        <i>last edit: {lastEdit}</i>
                    </small>
                </div>
            </main>
        </div>
    );
}
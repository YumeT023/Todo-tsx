import React from "react";
import { ListI } from "../../Models/list.model";
import { Card } from "./Card";

export const Column: React.FC<ListI> = ({label, items, handle, handleDelete}) => {

    return (
        <div className="Column">

            <main>

                <div className="column-header">
                    <h3>{label}</h3>
                </div>

                <div className="column-content">
                    {
                        items.map((item, index) => {
                            return (
                                <Card 
                                    item={item}
                                    handle={handle}
                                    onDelete={handleDelete}
                                    key={index} 
                                />
                            );
                        })
                    }
                </div>

                <div className="column-footer"></div>

            </main>

        </div>
    );
}
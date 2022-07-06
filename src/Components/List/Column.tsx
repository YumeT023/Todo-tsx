import React, { useState } from "react";
import { ItemI, ListI } from "../../Models/list.model";
import { Card } from "./Card";

export const Column: React.FC<ListI> = ({label, items, handle}) => {
    const [_items, setItems] = useState<ItemI[]>(items);

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
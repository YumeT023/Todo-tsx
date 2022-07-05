import React from "react";
import { ListI } from "../../Models/list.interface";
import { Card } from "./Card";

export const Column: React.FC<ListI> = ({label, items}) => {
    return (
        <div className="Column">

            <main>

                <div className="column-header">
                    <h3>{label}</h3>
                </div>

                <div className="column-content">
                    {
                        items.map(item => {
                            return (
                                <Card {...item} />
                            );
                        })
                    }
                </div>

            </main>

        </div>
    );
}
import { ItemI } from "../../Models/list.interface";

type GetItemsByAttribute<T, C = string> = {
    (items: T[], ...args: Array<C>): Array<T>
};

export const getItemsByStatus: GetItemsByAttribute<ItemI> = (items, status) => {
    return (
        items.filter(item => item.status == status)
    );
}
import { ItemI } from "../Models/list.model";
import { GetItemsByAttribute } from "../Models/list.model";

export const getItemsByStatus: GetItemsByAttribute<ItemI> = (items, status) => {
    return (
        items.filter(item => item.status === status)
    );
}
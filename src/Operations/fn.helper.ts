import { OptionI } from "../Models/form.interface";
import { ItemI } from "../Models/list.model";
import { GetItemsByAttribute } from "../Models/list.model";

export const getItemsByStatus: GetItemsByAttribute<ItemI> = (items, status) => {
    return (
        items.filter(item => item.status == status)
    );
}

export const constructCheckOptionsFromString = (label: string[]): OptionI[] => {
    return label.map(label => (
        {
            label,
            status: false
        }
    ));
}
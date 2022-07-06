import { ItemI } from "./list.model"

export interface CardI {
    item: ItemI
    handle: (idItem: number) => void
}
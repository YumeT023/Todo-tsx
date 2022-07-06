export type StatusT = "TODO" | "DOING" | "DONE"

export interface MainListI {
	full: boolean;
	items: Array<ItemI>;
	handleEdit: (idItem: number) => void;
	handleDelete: (idItem: number) => void;
}

export interface ItemI {
	idItem: number;
	title: string;
	description: string;
	lastEdit?: string;
	status?: StatusT;
}

export interface ListI {
	label: string;
	items: Array<ItemI>;
	handle: (idItem: number) => void;
	handleDelete: (idItem: number) => void;
}

export type GetItemsByAttribute<T, C = string> = {
    (items: T[], ...args: Array<C>): Array<T>
};

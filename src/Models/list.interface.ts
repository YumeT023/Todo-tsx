export interface ItemI {
	idItem: number;
	title: string;
	description: string;
	status?: "TODO" | "DOING" | "DONE";
}

export interface ListI {
	label: string;
	items: Array<ItemI>;
}

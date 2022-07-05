export default interface ButtonI {
    label: string;
    color?: string;
    onClick?: () => void;
    disabled?: boolean;
}
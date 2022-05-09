export interface ISelectProps {
    value: string;
    options: string[];
    onSelect: (value: string) => void;
}

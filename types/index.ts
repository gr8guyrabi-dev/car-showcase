import { manufacturers } from './../constants/index';
import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
}

export interface CustomFilterProps {
    title: string;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: String;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: String;
    fuel_type: String;
    highway_mpg: number;
    make: String;
    model: String;
    transmission: String;
    year: number;
}

export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}
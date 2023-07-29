import { BaseEntity } from "./BaseEntity";

export interface Manufactor extends BaseEntity{
    name: string;
    description: string;
    logoPath: string;
}
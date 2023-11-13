import { BaseEntity } from "./BaseEntity";

export interface Key extends BaseEntity{
  manufactor: string
  model: string;
  year: string;
  buttons: number;
  price: number;
  keyType: string;
  bladeType: string;
  serviceType: string;
  observation: string;
  userId: string;
}
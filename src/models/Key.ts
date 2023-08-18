import { BaseEntity } from "./BaseEntity";
import { KeyType } from "./KeyType";

export interface Key extends BaseEntity{
  manufactor: string
  model: string;
  year: string;
  buttons: number;
  price: number;
  keyType: string;
  bladeType: string;
  userId: string;
}
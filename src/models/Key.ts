import { BaseEntity } from "./BaseEntity";
import { BladeType } from "./BladeType";
import { KeyType } from "./KeyType";
import { Manufactor } from "./Manufactor";

export interface Key extends BaseEntity{
  manufactor: Manufactor | null;
  model: string;
  year: string;
  buttons: number;
  price: number;
  keyType: KeyType | null;
  bladeType: BladeType | null;
  userId: string;
}
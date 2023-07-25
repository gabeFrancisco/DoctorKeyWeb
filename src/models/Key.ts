import { BaseEntity } from "./BaseEntity";
import { BladeType } from "./BladeType";
import { KeyType } from "./KeyType";

export interface Key extends BaseEntity{
  manufactor: string;
  model: string;
  year: string;
  buttons: number;
  keyType: KeyType;
  bladeType: BladeType;
  userId: string;
}
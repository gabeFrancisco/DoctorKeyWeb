import { BaseEntity } from "./BaseEntity";

export interface Address extends BaseEntity {
  road: string;
  number: string;
  complement: string;
  neighborhood: string;
  cep: string;
  city: string;
  state: string;
}

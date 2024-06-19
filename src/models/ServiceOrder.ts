import { Address } from "./Address";
import { BaseEntity } from "./BaseEntity";
import { Customer } from "./Customer";

export interface ServiceOrder extends BaseEntity {
  title: string;
  customer: Customer;
  address: Address;
  description: string;
  priority: string;
  state: string;
  value: number;
  workgroupId: string;
}

import { BaseEntity } from "./BaseEntity";

export interface WorkGroup extends BaseEntity{
  title: string,
  description: string,
  userId: string
}
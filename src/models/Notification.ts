import { BaseEntity } from "./BaseEntity";

export interface Notification extends BaseEntity{
  title: string;
  message: string;
  workGroupId: string;
}
import { BaseEntity } from "./BaseEntity";
import { User } from "./User";

export interface Notification extends BaseEntity {
  title: string;
  message: string;
  readed: boolean;
  user: User;
  workGroupId: string;
}

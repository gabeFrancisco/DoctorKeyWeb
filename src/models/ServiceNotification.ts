import { BaseEntity } from "@/models/BaseEntity";

export interface ServiceNotification extends BaseEntity {
  title: string;
  message: string;
  state: string;
  priority: string;
  username: string;
  workGroupId: string;
}

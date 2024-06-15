import { BaseEntity } from "@/models/BaseEntity";

export interface ChecklistNotification extends BaseEntity {
  title: string;
  state: string;
  priority: string;
  username: string;
  workGroupId: string;
}

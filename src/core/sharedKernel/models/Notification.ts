import { MessageCode } from "../enums/MessageCode";

export default class Notification {
  private notifications: NotificationMessage[] = [];

  HasContent(): boolean {
    return this.notifications.length > 0;
  }

  GetNotifications(): NotificationMessage[] {
    return this.notifications;
  }

  AddNotification(message: string, code: MessageCode): void {
    this.notifications.push({
      code: code,
      codeName: MessageCode[code],
      message: message,
    });
  }
}

class NotificationMessage {
  constructor(public code: MessageCode, public codeName: string, public message: string) {}
}

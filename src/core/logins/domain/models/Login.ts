import { MessageCode } from "../../../sharedKernel/enums/MessageCode";
import Notification from "../../../sharedKernel/models/Notification";

export class Login {
  constructor(login?: Login) {
    if (login) {
      this.username = login.username;
      this.password = login.password;
    }
  }

  public username: string = "";
  public password: string = "";

  static isModelValid(contact: Login): boolean {
    if (contact.username === "" || contact.username === null || contact.username === undefined) return true;
    if (contact.password === "" || contact.password === null || contact.password === undefined) return true;

    return false;
  }

  static validateUsername(username: string): Notification {
    const notification = new Notification();

    if (username === "" || username === null || username === undefined)
      notification.AddNotification("El USUARIO es requerido.", MessageCode.Error);

    return notification;
  }

  static validatePassword(password: string): Notification {
    const notification = new Notification();

    if (password === "" || password === null || password === undefined)
      notification.AddNotification("La CONTRASEÑA es requerida.", MessageCode.Error);

    return notification;
  }
}

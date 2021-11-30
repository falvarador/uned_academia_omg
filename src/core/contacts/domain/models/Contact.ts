import { MessageCode } from "../../../sharedKernel/enums/MessageCode";
import Notification from "../../../sharedKernel/models/Notification";

export class Contact {
  constructor(contact?: Contact) {
    if (contact) {
      this.id = contact.id;
      this.name = contact.name;
      this.email = contact.email;
      this.birthday = contact.birthday;
      this.telephone = contact.telephone;
      this.message = contact.message;
    }
  }

  public id: number = 0;
  public name: string = "";
  public email: string = "";
  public birthday: string = "";
  public telephone: string = "";
  public message: string = "";

  static isModelValid(contact: Contact): boolean {
    if (contact.id === 0 || contact.id === null || contact.id === undefined) return true;
    if (contact.name === "" || contact.name === null || contact.name === undefined) return true;
    if (contact.email === "" || contact.email === null || contact.email === undefined) return true;
    if (contact.birthday === null || contact.birthday === undefined) return true;
    if (contact.telephone === "" || contact.telephone === null || contact.telephone === undefined) return true;
    if (contact.message === "" || contact.message === null || contact.message === undefined) return true;

    return false;
  }

  static validateId(id: number): Notification {
    const re = /^\d+$/;
    const notification = new Notification();

    if (id === 0 || id === null || id === undefined) notification.AddNotification("El ID es requerido.", MessageCode.Error);

    if (!re.test(String(id))) notification.AddNotification("Debe ingresar solamente números.", MessageCode.Error);

    if (String(id).length > 15) notification.AddNotification("Debe ingresar como máximo 15 caracteres.", MessageCode.Error);

    return notification;
  }

  static validateName(name: string): Notification {
    const re = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/g;
    const notification = new Notification();

    if (name === "" || name === null || name === undefined) notification.AddNotification("El NOMBRE es requerido.", MessageCode.Error);

    if (!re.test(name)) notification.AddNotification("Debe ingresar un nombre válido.", MessageCode.Error);

    if (name.length > 85) notification.AddNotification("Debe ingresar como máximo 85 caracteres.", MessageCode.Error);

    return notification;
  }

  static validateEmail(email: string): Notification {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const notification = new Notification();

    if (email === "" || email === null || email === undefined)
      notification.AddNotification("El CORREO ELECTRÓNICO es requerido.", MessageCode.Error);

    if (!re.test(email.toLowerCase())) notification.AddNotification("Debe ingresar un correo electrónico válido.", MessageCode.Error);

    return notification;
  }

  static validateBirthday(birthday: Date): Notification {
    const notification = new Notification();

    if (!(birthday instanceof Date)) notification.AddNotification("Debe ingresar una fecha válida.", MessageCode.Error);

    return notification;
  }

  static validateTelephone(telephone: string): Notification {
    const re = /^\d{8}$/;
    const notification = new Notification();

    if (telephone === "" || telephone === null || telephone === undefined)
      notification.AddNotification("El teléfono es requerido.", MessageCode.Error);

    if (!re.test(telephone)) notification.AddNotification("Debe ingresar un teléfono válido, con un máximo 8 números.", MessageCode.Error);

    return notification;
  }

  static validateMessage(message: string): Notification {
    var notification = new Notification();

    if (message === "" || message === null || message === undefined)
      notification.AddNotification("El MENSAJE es requerido.", MessageCode.Error);
    if (message.length > 250) notification.AddNotification("Debe ingresar como máximo 250 caracteres.", MessageCode.Error);

    return notification;
  }
}

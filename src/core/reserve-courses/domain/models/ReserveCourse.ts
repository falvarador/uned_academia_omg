import { MessageCode } from "../../../sharedKernel/enums/MessageCode";
import Notification from "../../../sharedKernel/models/Notification";

export class ReserveCourse {
  constructor(course?: ReserveCourse) {
    if (course) {
      this.id = course.id;
      this.name = course.name;
      this.email = course.email;
      this.category = course.category;
      this.course = course.course;
      this.message = course.message;
    }
  }

  public id: number = 0;
  public name: string = "";
  public email: string = "";
  public category: string = "";
  public course: string = "";
  public message: string = "";

  static isModelValid(course: ReserveCourse): boolean {
    if (course.id === 0 || course.id === null || course.id === undefined) return true;
    if (course.name === "" || course.name === null || course.name === undefined) return true;
    if (course.email === "" || course.email === null || course.email === undefined) return true;
    if (course.category === null || course.category === undefined) return true;
    if (course.course === "" || course.course === null || course.course === undefined) return true;
    if (course.message === "" || course.message === null || course.message === undefined) return true;

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

  static validateCategory(category: string): Notification {
    const notification = new Notification();

    if (category === "" || category === "0" || category === null || category === undefined)
      notification.AddNotification("La CATEGORÍA es requerida.", MessageCode.Error);

    return notification;
  }

  static validateCourse(course: string): Notification {
    const notification = new Notification();

    if (course === "" || course === "0" || course === null || course === undefined)
      notification.AddNotification("El CURSO es requerido.", MessageCode.Error);

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

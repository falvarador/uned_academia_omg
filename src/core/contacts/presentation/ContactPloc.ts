import { Contact } from "../domain/models/Contact";
import { ContactLocalStorageRepository } from "../infraestructure/ContactLocalStorageRepository";
import { ContactRepositoryInterface } from "../domain/abstractions/ContactRepositoryInterface";
import Notification from "../../sharedKernel/models/Notification";

export class ContactPloc {
  constructor() {
    this._repository = new ContactLocalStorageRepository();
  }

  private _repository: ContactRepositoryInterface;

  saveContact(contact: Contact): void {
    this._repository.save(contact);
  }

  validateContact(property: string, value: string): Notification {
    switch (property) {
      case "id":
        return Contact.validateId(Number(value));
      case "name":
        return Contact.validateName(value);
      case "email":
        return Contact.validateEmail(value);
      case "birthday":
        return Contact.validateBirthday(new Date(value));
      case "telephone":
        return Contact.validateTelephone(value);
      case "message":
        return Contact.validateMessage(value);

      default:
        return new Notification();
    }
  }
}

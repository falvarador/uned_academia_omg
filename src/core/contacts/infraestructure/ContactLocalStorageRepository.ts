import { ContactRepositoryInterface } from "../domain/abstractions/ContactRepositoryInterface";
import { Contact } from "../domain/models/Contact";

export class ContactLocalStorageRepository implements ContactRepositoryInterface {
  constructor() {}
  delete(): void {
    localStorage.removeItem("contacts");
  }
  get(): Contact {
    return this.getAll().find((contact) => contact.id === 1) as Contact;
  }
  getAll(): Contact[] {
    const json = localStorage.getItem("contacts") || "";
    return json ? (JSON.parse(json) as Contact[]) : [];
  }
  save(contact: Contact): void {
    const json = localStorage.getItem("contacts") || "";
    const contacts = json ? (JSON.parse(json) as Contact[]) : [];

    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
}

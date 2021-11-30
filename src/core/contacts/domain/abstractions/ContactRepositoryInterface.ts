import { Contact } from "../models/Contact";

export interface ContactRepositoryInterface {
  delete(): void;
  get(): Contact;
  getAll(): Contact[];
  save(contact: Contact): void;
}

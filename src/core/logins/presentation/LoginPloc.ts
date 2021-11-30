import { Login } from "../domain/models/Login";
import { LoginLocalStorageRepository } from "../infraestructure/LoginLocalStorageRepository";
import Notification from "../../sharedKernel/models/Notification";

export class LoginPloc {
  constructor() {
    this._repository = new LoginLocalStorageRepository();
  }

  private _repository: LoginLocalStorageRepository;

  deleteLogin(): void {
    this._repository.delete();
  }

  getSavedLogin(): Login {
    return this._repository.get();
  }

  saveLogin(login: Login): void {
    if (login.username !== "" && login.password !== "") this._repository.save(login);
  }

  validateLogin(property: string, value: string): Notification {
    switch (property) {
      case "username":
        return Login.validateUsername(value);
      case "password":
        return Login.validatePassword(value);

      default:
        return new Notification();
    }
  }
}

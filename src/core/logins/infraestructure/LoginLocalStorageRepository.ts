import { Login } from "../domain/models/Login";
import { LoginRepositoryInterface } from "../domain/abstractions/LoginStorageRepositoryInterface";

export class LoginLocalStorageRepository implements LoginRepositoryInterface {
  public delete(): void {
    localStorage.removeItem("login");
  }

  public get(): Login {
    const json = localStorage.getItem("login") || "";
    return json ? (JSON.parse(json) as Login) : new Login();
  }

  public getAll(): Login[] {
    const json = localStorage.getItem("logins") || "";
    return json ? (JSON.parse(json) as Login[]) : [];
  }

  public save(login: Login): void {
    localStorage.setItem("login", JSON.stringify(login));
  }
}

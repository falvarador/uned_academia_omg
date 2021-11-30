import { Login } from "../models/Login";

export interface LoginRepositoryInterface {
  delete(): void;
  get(): Login;
  getAll(): Login[];
  save(login: Login): void;
}

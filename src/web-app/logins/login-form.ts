import { customElement, property, state } from "lit/decorators.js";
import { html, css, LitElement } from "lit";

import { Login } from "../../core/logins/domain/models/Login";
import { LoginPloc } from "../../core/logins/presentation/LoginPloc";
import Notification from "../../core/sharedKernel/models/Notification";

import "../commons/utilities/input-type";

@customElement("omg-login-form")
export class OmgLoginForm extends LitElement {
  @property()
  login = new Login();

  @state()
  hasError: boolean = true;

  @state()
  remember: boolean = false;

  @state()
  fieldName: string = "";

  private _notification: Notification;
  private _ploc: LoginPloc;

  constructor() {
    super();

    this._notification = new Notification();
    this._ploc = new LoginPloc();
  }

  static styles = css`
    :host {
      width: 100%;
    }

    .error {
      background-color: #a6281c95;
    }

    form {
      display: grid;
      grid-template-columns: 1fr;
      place-items: flex-start;
      width: 100%;
    }

    form aside {
      width: 100%;
    }

    form input[type="checkbox"] {
      background-color: var(--gray-color);
      height: 1.5rem;
      width: 1.5rem;
    }

    form input[type="submit"] {
      background-color: var(--first-color);
      border-radius: 0.5rem;
      border-style: none;
      color: var(--white-color);
      cursor: pointer;
      font-weight: bold;
      margin-top: 9rem;
      padding: 1.4rem;
      text-align: center;
      text-decoration: none;
      width: 21rem;
    }

    input-type {
      margin-bottom: 1rem;
      --input-type-width: 100%;
    }

    form input[disabled] {
      background-color: #cad1d7;
      cursor: not-allowed;
    }

    .info {
      border-radius: 0.5rem;
      color: #fefefe;
      font-size: 0.8rem;
      font-weight: bold;
      margin-top: 0.5rem;
      padding: 0.5rem;
      text-align: left;
    }

    .links,
    .links-and-notif {
      align-items: center;
      display: flex;
      justify-content: space-evenly;
      margin: 0.5rem;
    }

    .links-and-notif {
      justify-content: space-between;
      margin: 0;
    }

    .links > aside {
      align-items: center;
      display: flex;
      flex-basis: 30%;
      justify-content: center;
    }

    .links-and-notif > aside {
      width: 50%;
    }

    .success {
      background-color: #89ce2695;
    }
  `;

  render() {
    return html`
      <form @submit="${this._handleSubmit}">
        <aside>
          <input-type
            type="text"
            name="username"
            label="USUARIO"
            value="${this.login.username}"
            disable-autocomplete
            required
            @change="${this._valueChanged}"
            ?errored=${this.hasError && this.fieldName === "username"}
          ></input-type>
          <input-type
            type="password"
            name="password"
            label="CONTRASEÑA"
            value="${this.login.password}"
            disable-autocomplete
            required
            @change="${this._valueChanged}"
            ?errored=${this.hasError && this.fieldName === "password"}
          ></input-type>
        </aside>
        <aside class="links">
          <aside>
            <input
              @click="${this._handleClick}"
              ?checked="${this.remember}"
              ?disabled=${Login.isModelValid(this.login) || this.hasError}
              type="checkbox"
            />
            <span for="remember">Recordar este usuario</span>
          </aside>
          <a href="">¿Olvidaste tu contraseña?</a>
        </aside>
        <aside class="links-and-notif">
          <input type="submit" value="INGRESAR" ?disabled=${Login.isModelValid(this.login) || this.hasError} />
          <aside>${this._notification.GetNotifications().map((el) => html`<p class="info error">${el.message}</p>`)}</aside>
        </aside>
      </form>
    `;
  }

  firstUpdated() {
    this.hasError = false;
    this.login = this._ploc.getSavedLogin();
    const hasLogin = (this.login.password !== "" && this.login.username !== "") || false;

    if (hasLogin) location.href = "/dashboard.html";

    this.remember = hasLogin;
  }

  private _handleClick(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.checked) {
      this.remember = true;
      this._ploc.saveLogin(this.login);
    } else {
      this.remember = false;
      this._ploc.deleteLogin();
    }
  }

  private _handleSubmit(event: Event) {
    event.preventDefault();
    location.href = "/dashboard.html";
  }

  private _valueChanged(event: CustomEvent) {
    const formField = event.detail as HTMLInputElement | HTMLTextAreaElement;

    this._validateLogin(formField.name, formField.value);

    this.login = {
      ...this.login,
      [formField.name]: formField.value,
    };
  }

  private _validateLogin(name: string, value: string) {
    this._notification = this._ploc.validateLogin(name, value);

    if (this._notification.HasContent()) {
      this.hasError = true;
      this.fieldName = name;
    } else {
      this.hasError = false;
      this.fieldName = "";
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "omg-login-form": OmgLoginForm;
  }
}

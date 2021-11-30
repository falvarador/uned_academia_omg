import { customElement, property, state } from "lit/decorators.js";
import { html, css, LitElement } from "lit";

import { Contact } from "../../core/contacts/domain/models/Contact";
import { ContactPloc } from "../../core/contacts/presentation/ContactPloc";
import Notification from "../../core/sharedKernel/models/Notification";

import "../commons/utilities/input-type";
import "../commons/utilities/text-area";

@customElement("omg-contact-form")
export class OmgContactForm extends LitElement {
  @property()
  contact = new Contact();

  @state()
  hasError: boolean = true;

  @state()
  success: boolean = false;

  @state()
  fieldName: string = "";

  private _notification: Notification;
  private _ploc: ContactPloc;

  constructor() {
    super();

    this._notification = new Notification();
    this._ploc = new ContactPloc();
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
      grid-template-columns: 1fr 1fr;
      place-items: flex-start;
      width: 100%;
    }

    form input[type="submit"] {
      background-color: var(--first-color);
      border-radius: 0.5rem;
      border-style: none;
      color: var(--white-color);
      cursor: pointer;
      display: inline-block;
      font-weight: bold;
      margin-top: 9rem;
      padding: 1.4rem;
      text-align: center;
      text-decoration: none;
      width: 7.5rem;
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
            name="id"
            label="ID"
            value="${this.contact.id}"
            disable-autocomplete
            required
            @change="${this._valueChanged}"
            ?errored=${this.hasError && this.fieldName === "id"}
          ></input-type>
          <input-type
            type="text"
            name="name"
            label="NOMBRE"
            value="${this.contact.name}"
            disable-autocomplete
            required
            @change="${this._valueChanged}"
            ?errored=${this.hasError && this.fieldName === "name"}
          ></input-type>
          <input-type
            type="email"
            name="email"
            label="CORREO ELECTRÓNICO"
            value="${this.contact.email}"
            disable-autocomplete
            required
            @change="${this._valueChanged}"
            ?errored=${this.hasError && this.fieldName === "email"}
          ></input-type>
        </aside>
        <aside>
          <input-type
            type="date"
            name="birthday"
            label="FECHA DE NACIMIENTO"
            value="${this.contact.birthday}"
            disable-autocomplete
            required
            @change="${this._valueChanged}"
            ?errored=${this.hasError && this.fieldName === "birthday"}
          ></input-type>
          <input-type
            name="telephone"
            label="TELÉFONO"
            value="${this.contact.telephone}"
            disable-autocomplete
            required
            @change="${this._valueChanged}"
            ?errored=${this.hasError && this.fieldName === "telephone"}
          ></input-type>
          <text-area
            name="message"
            label="MENSAJE"
            value="${this.contact.message}"
            @change="${this._valueChanged}"
            ?errored=${this.hasError && this.fieldName === "message"}
          ></text-area>
        </aside>
        <aside>
          <input type="submit" value="ENVIAR" ?disabled=${Contact.isModelValid(this.contact) || this.hasError} />
        </aside>
        <aside>
          ${this._notification.GetNotifications().map((el) => html`<p class="info error">${el.message}</p>`)}
          ${this.success ? html`<p class="info success">¡Gracias por contactarnos!</p>` : ""}
        </aside>
      </form>
    `;
  }

  private _handleSubmit(event: Event) {
    event.preventDefault();

    this._ploc.saveContact(this.contact);
    this.success = true;

    console.log(this.contact);

    setTimeout(() => {
      this.success = false;
    }, 5000);
  }

  private _valueChanged(event: CustomEvent) {
    const formField = event.detail as HTMLInputElement | HTMLTextAreaElement;

    this.contact = {
      ...this.contact,
      [formField.name]: formField.value,
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "omg-contact-form": OmgContactForm;
  }
}

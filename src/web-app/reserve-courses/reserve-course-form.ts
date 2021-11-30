import { customElement, property, state } from "lit/decorators.js";
import { html, css, LitElement } from "lit";

import { ReserveCourse } from "../../core/reserve-courses/domain/models/ReserveCourse";
import { ReserveCoursePloc } from "../../core/reserve-courses/presentation/ReserveCoursePloc";
import Notification from "../../core/sharedKernel/models/Notification";

import "../commons/utilities/combo-box";
import "../commons/utilities/input-type";
import "../commons/utilities/text-area";

@customElement("omg-reserve-course-form")
export class OmgReserveCourseForm extends LitElement {
  @property()
  reserveCourse = new ReserveCourse();

  @state()
  hasError: boolean = true;

  @state()
  success: boolean = false;

  @state()
  fieldName: string = "";

  @state()
  categories: KeyPairValue[] = [];

  @state()
  courses: KeyPairValue[] = [];

  private _notification: Notification;
  private _ploc: ReserveCoursePloc;

  constructor() {
    super();

    this._notification = new Notification();
    this._ploc = new ReserveCoursePloc();
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
            value="${this.reserveCourse.id}"
            disable-autocomplete
            required
            @change="${this._valueChanged}"
            ?errored=${this.hasError && this.fieldName === "id"}
          ></input-type>
          <input-type
            type="text"
            name="name"
            label="NOMBRE"
            value="${this.reserveCourse.name}"
            disable-autocomplete
            required
            @change="${this._valueChanged}"
            ?errored=${this.hasError && this.fieldName === "name"}
          ></input-type>
          <input-type
            type="email"
            name="email"
            label="CORREO ELECTRÓNICO"
            value="${this.reserveCourse.email}"
            disable-autocomplete
            required
            @change="${this._valueChanged}"
            ?errored=${this.hasError && this.fieldName === "email"}
          ></input-type>
        </aside>
        <aside>
          <combo-box
            name="category"
            label="CATEGORÍA"
            value="${this.reserveCourse.category}"
            .items="${this.categories}"
            disable-autocomplete
            placeholder="Elige una opción"
            required
            @change="${this._valueChanged}"
            ?errored=${this.hasError && this.fieldName === "category"}
          ></combo-box>
          <combo-box
            name="course"
            label="CURSO"
            value="${this.reserveCourse.course}"
            .items="${this.courses}"
            disable-autocomplete
            placeholder="Elige una opción"
            required
            @change="${this._valueChanged}"
            ?errored=${this.hasError && this.fieldName === "course"}
          ></combo-box>
          <text-area
            name="message"
            label="MENSAJE"
            value="${this.reserveCourse.message}"
            @change="${this._valueChanged}"
            ?errored=${this.hasError && this.fieldName === "message"}
          ></text-area>
        </aside>
        <aside>
          <input type="submit" value="ENVIAR" ?disabled=${ReserveCourse.isModelValid(this.reserveCourse) || this.hasError} />
        </aside>
        <aside>
          ${this._notification.GetNotifications().map((el) => html`<p class="info error">${el.message}</p>`)}
          ${this.success ? html`<p class="info success">¡Su solicitud ha sido enviada!</p>` : ""}
        </aside>
      </form>
    `;
  }

  async firstUpdated() {
    this.categories = await this._ploc.getCategories();
    this.courses = await this._ploc.getCourses();
  }

  private _handleSubmit(event: Event) {
    event.preventDefault();

    this._ploc.saveReserveCourse(this.reserveCourse);
    this.success = true;

    console.log(this.reserveCourse);

    setTimeout(() => {
      this.success = false;
    }, 5000);
  }

  private _valueChanged(event: CustomEvent) {
    const formField = event.detail as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

    this._validateReserveCourse(formField.name, formField.value);

    this.reserveCourse = {
      ...this.reserveCourse,
      [formField.name]: formField.value,
    };
  }

  private _validateReserveCourse(name: string, value: string) {
    this._notification = this._ploc.validateReserveCourse(name, value);

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
    "omg-reserve-course-form": OmgReserveCourseForm;
  }
}

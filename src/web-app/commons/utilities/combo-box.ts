import { customElement, property } from "lit/decorators.js";
import { html, css, LitElement } from "lit";

@customElement("combo-box")
export class ComboBox extends LitElement {
  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: Boolean })
  errored: boolean = false;

  @property()
  name: string = "";

  @property()
  label: string = "";

  @property()
  placeholder: string = "";

  @property({ type: Boolean })
  required: boolean = false;

  @property()
  value: string = "";

  @property()
  items: KeyPairValue[] = [];

  static styles = [
    css`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        width: 100%;
      }

      .errored {
        background-color: var(--combo-box-errored-background-color, #a6281c75);
      }

      select {
        background-color: var(--combo-box-background-color, #cad1d7);
        border-radius: var(--combo-box-border-radius, 6px);
        border-style: var(--combo-box-border-style, none);
        color: var(--combo-box-color, #222222);
        font-family: var(--combo-box-font-family, "Open Sans", sans-serif);
        font-size: var(--combo-box-font-size, 1rem);
        height: var(--combo-box-height, 1.5rem);
        margin: var(--combo-box-margin, 0.2rem);
        width: var(--combo-box-width, 16rem);
      }

      select:focus {
        outline: var(--combo-box-focus-outline, none);
        border-color: var(--combo-box-focus-border-color, #509ee3);
      }

      label {
        color: var(--combo-box-label-color, #222222);
        display: block;
        font-weight: var(--combo-box-label-font-weight, bold);
        text-align: var(--combo-box-label-text-aling, left);
      }
    `,
  ];

  render() {
    return html`
      ${this.label ? html`<label for="${this.name}">${this.label}:</label>` : ""}
      <select
        name="${this.name}"
        id="${this.name}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        .value=${this.value}
        @change="${this._inputChanged}"
        class="${this.errored ? "errored" : ""}"
      >
        ${this.items?.length > 0
          ? this.items.map((opt) => html` <option .value=${opt.key}>${opt.value}</option> `)
          : html` <option value="0" selected>${this.placeholder}</option> `}
      </select>
    `;
  }

  private _inputChanged(e: Event) {
    const select = e.target as HTMLSelectElement;

    this.value = select.value;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: select,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "combo-box": ComboBox;
  }
}

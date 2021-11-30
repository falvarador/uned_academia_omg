import { customElement, property } from "lit/decorators.js";
import { html, css, LitElement } from "lit";

@customElement("input-type")
export class InputType extends LitElement {
  @property({ attribute: "disable-autocomplete", type: Boolean })
  disableAutocomplete: boolean = false;

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

  @property({ type: String })
  type: string = "text";

  @property()
  value: string = "";

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
        background-color: var(--input-type-errored-background-color, #a6281c75);
      }

      input {
        background-color: var(--input-type-background-color, #cad1d7);
        border-radius: var(--input-type-border-radius, 6px);
        border-style: var(--input-type-border-style, none);
        color: var(--input-type-color, #222222);
        font-family: var(--input-type-font-family, "Open Sans", sans-serif);
        font-size: var(--input-type-font-size, 1rem);
        height: var(--input-type-height, 1.5rem);
        margin: var(--input-type-margin, 0.2rem);
        width: var(--input-type-width, 16rem);
      }

      input:focus {
        outline: var(--input-type-focus-outline, none);
        border-color: var(--input-type-focus-border-color, #509ee3);
      }

      input::placeholder {
        color: var(--input-type-placeholder-color, #404345);
      }

      label {
        color: var(--input-type-label-color, #222222);
        display: block;
        font-weight: var(--input-type-label-font-weight, bold);
        text-align: var(--input-type-label-text-aling, left);
      }
    `,
  ];

  render() {
    return html`
      ${this.label ? html`<label for="${this.name}">${this.label}:</label>` : ""}
      <input
        type="${this.type}"
        name="${this.name}"
        id="${this.name}"
        placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        autocomplete="${this.disableAutocomplete ? "off" : "on"}"
        .value=${this.value}
        @input="${this._inputChanged}"
        class="${this.errored ? "errored" : ""}"
      />
    `;
  }

  private _inputChanged(e: Event) {
    const input = e.target as HTMLInputElement;

    this.value = input.value;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: input,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "input-type": InputType;
  }
}

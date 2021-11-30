import { customElement, property } from "lit/decorators.js";
import { html, css, LitElement } from "lit";

@customElement("text-area")
export class TextArea extends LitElement {
  @property()
  name: string = "";

  @property()
  label: string = "";

  @property()
  value: string = "";

  @property({ type: Boolean })
  errored: boolean = false;

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
        background-color: var(--text-area-errored-background-color, #a6281c75);
      }

      textarea {
        background-color: var(--text-area-background-color, #cad1d7);
        border-radius: var(--text-area-border-radius, 6px);
        border-style: var(--text-area-border-style, none);
        color: var(--text-area-color, #222222);
        font-family: var(--text-area-font-family, "Open Sans", sans-serif);
        font-size: var(--text-area-font-size, 1rem);
        height: var(--text-area-height, 10rem);
        margin: var(--text-area-margin, 0.2rem);
        resize: var(--text-area-resize, none);
        width: var(--text-area-width, 16rem);
      }

      textarea:focus {
        outline: var(--text-area-focus-outline, none);
        border-color: var(--text-area-focus-border-color, #509ee3);
      }

      label {
        color: var(--text-area-label-color, #222222);
        display: block;
        font-weight: var(--text-area-label-font-weight, bold);
        text-align: var(--text-area-label-text-aling, left);
      }
    `,
  ];

  render() {
    return html`
      ${this.label ? html`<label for="${this.name}">${this.label}:</label>` : ""}
      <textarea
        name="${this.name}"
        id="${this.name}"
        cols="30"
        rows="10"
        .value=${this.value}
        @input="${this._textAreaChanged}"
        class="${this.errored ? "errored" : ""}"
      ></textarea>
    `;
  }

  private _textAreaChanged(e: Event) {
    const input = e.target as HTMLTextAreaElement;

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
    "text-area": TextArea;
  }
}

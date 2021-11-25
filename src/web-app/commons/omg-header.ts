import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GlobalStyles } from "./styles/global-styles";

@customElement("omg-header")
export class OmgHeader extends LitElement {
  static styles = [
    GlobalStyles.customProperties,
    GlobalStyles.reset,
    css`
      :host {
        --link-color: #509ee3;
      }

      a {
        color: var(--link-color);
        transition: color 0.5s ease-out;
      }

      a:hover {
        color: var(--white-color);
      }

      .header {
        background-color: var(--second-alternative-color);
        bottom: 0;
        height: var(--header-height);
        left: 0;
        padding: 1rem;
        position: fixed;
        width: 100%;
        z-index: 999;
      }

      .header > .container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }

      /* Menu */
      .menu-btn {
        background-color: var(--second-alternative-color-color);
        border: 0;
        cursor: pointer;
        outline: thin solid var(--second-alternative-color);
      }

      .menu-btn svg {
        fill: var(--first-color);
        height: 2rem;
        width: 2rem;
      }

      .menu {
        background-color: var(--second-alternative-color);
        bottom: var(--header-height);
        display: flex;
        flex-direction: column;
        left: 0;
        opacity: 0;
        pointer-events: none;
        position: fixed;
        transition: opacity 0.5s ease;
        width: 100%;
      }

      .menu a {
        color: var(--first-color);
        font-size: 1.5rem;
        font-weight: bold;
        padding: 1rem;
        text-align: center;
        text-decoration: none;
      }

      .menu a:hover {
        background-color: var(--first-color);
        color: var(--white-color);
      }

      .menu.is-active {
        opacity: 1;
        pointer-events: auto;
      }

      @media screen and (min-width: 1280px) {
        .header {
          height: calc(var(--header-height) - 0.5rem);
          padding: 0.7rem;
          position: sticky;
          top: 0;
        }

        .menu-btn {
          display: none;
        }

        .menu {
          flex-direction: row;
          opacity: 1;
          pointer-events: auto;
          position: static;
          width: auto;
        }

        .menu a {
          padding: 0 1rem;
        }

        .menu a:last-child {
          padding-right: 0;
        }

        .menu a:hover {
          background-color: transparent;
        }
      }
    `,
  ];

  @property()
  name = "World";

  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <header class="header">
        <section class="container">
          <div class="logotype">
            <a href="index.html">
              <img src="./assets/img/logotype.svg" alt="Academia OMG" />
            </a>
          </div>
          <button class="menu-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
            </svg>
            <svg class="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"
              />
            </svg>
          </button>
          <nav class="menu">
            <a href="index.html" class="is-active">Inicio</a>
            <a href="about.html">Acerca</a>
            <a href="scholarships.html">Becas</a>
            <a href="courses.html">Cursos</a>
            <a href="testimonials.html">Testimonios</a>
            <a href="contact.html">Contacto</a>
          </nav>
        </section>
      </header>
    `;
  }

  foo(): string {
    return "foo";
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "omg-header": OmgHeader;
  }
}

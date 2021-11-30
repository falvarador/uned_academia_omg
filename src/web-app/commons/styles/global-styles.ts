import { LitElement, css } from "lit";

export class GlobalStyles extends LitElement {
  static customProperties = css`
    :root {
      --first-alpha-color: #00376875;
      --first-color: #003768;
      --second-alpha-color: #b37a0b75;
      --second-color: #b37a0b;
      --third-alpha-color: #1d59b375;
      --third-color: #1d59b3;

      --first-alternative-alpha-color: #19a3ff75;
      --first-alternative-color: #19a3ff;
      --second-alternative-alpha-color: #f5900075;
      --second-alternative-color: #f59000;
      --third-alternative-alpha-color: #89ce2675;
      --third-alternative-color: #89ce26;

      --first-other-alpha-color: #a6281c75;
      --first-other-color: #a6281c;

      --black-color: #1a1b1d;
      --gray-color: #cad1d7;
      --gray-dark-color: #404345;
      --gray-light-color: #f0f1f3;
      --white-color: #fefefe;

      --link-color: #509ee3;
      --text-color: #222222;
      --title-color: #333333;

      --black-alpha-color: #1a1b1d25;
      --white-alpha-color: #fefefe25;

      --font: "Lato", sans-serif;
      --header-height: 4rem;
      --max-width: 1280px;
    }
  `;

  static reset = css`
    html {
      box-sizing: border-box;
      font-family: var(--font);
      font-size: 16px;
      scroll-behavior: smooth;
    }

    *,
    *::after,
    *::before {
      box-sizing: inherit;
    }

    body {
      color: var(--text-color);
      margin: 0;
      min-height: 100vh;
      overflow-x: hidden;
      position: relative;
    }

    a {
      color: var(--link-color);
      transition: color 0.5s ease-out;
    }

    a:hover {
      color: var(--white-color);
    }

    h1 {
      font-size: 2rem;
      margin: 0;
    }

    h2 {
      font-size: 1.5rem;
      margin: 0;
    }

    h3 {
      font-size: 1.25rem;
      margin: 0;
    }

    h4 {
      font-size: 1rem;
      margin: 0;
    }

    h5 {
      font-size: 0.85rem;
      margin: 0;
    }

    h6 {
      font-size: 0.7rem;
      margin: 0;
    }

    img {
      height: auto;
      max-width: 100%;
    }

    p {
      line-height: 1.6;
    }
  `;

  static utilities = css`
    .avatar {
      border-radius: 50%;
      height: 5.5rem;
      object-fit: cover;
      width: 5.5rem;
    }

    .bg-gray-dark {
      background-color: var(--gray-dark-color);
    }

    .bg-gray-light {
      background-color: var(--gray-light-color);
    }

    .box-shadow-1 {
      box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.25);
    }

    .btn {
      background-color: var(--first-color);
      border-radius: 0.5rem;
      color: var(--white-color);
      display: inline-block;
      font-weight: bold;
      padding: 1rem;
      text-align: center;
      text-decoration: none;
      width: 240px;
    }

    .container {
      margin-left: auto;
      margin-right: auto;
      max-width: var(--max-width);
      padding-bottom: 16rem;
    }

    .gray-scale {
      filter: grayscale(1);
    }

    .none {
      display: none;
    }

    .section {
      padding: 2rem 1rem;
    }

    .section-title,
    .section-title-lg {
      border-bottom: thin solid var(--first-color);
      border-top: thin solid var(--first-color);
      color: var(--title-color);
      margin: 2rem auto;
      padding: 0.5rem 1rem;
      text-align: center;
      width: 250px;
    }

    .section-title-lg {
      width: 394px;
    }

    .text-first-color {
      color: var(--first-color);
    }

    .text-center {
      text-align: center;
    }

    .text-left {
      text-align: left;
    }

    .text-right {
      text-align: right;
    }

    @media screen and (min-width: 1280px) {
      .full-lg-screen {
        min-height: 100vh;
        width: 100%;
      }

      .text-lg-center {
        text-align: center;
      }

      .text-lg-left {
        text-align: left;
      }

      .text-lg-right {
        text-align: right;
      }
    }
  `;
}

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
}

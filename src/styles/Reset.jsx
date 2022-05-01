import { css } from "@emotion/react";

const reset = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    background-color: #fff;
    overflow: auto;
  }

  a {
    text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    background-color: transparent;
    outline: none;
    border: 0;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default reset;

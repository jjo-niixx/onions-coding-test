import { css } from "styled-components";

const mixin = {
  tableRow: (color = "#869196") => css`
    padding: 5px 12px;
    line-height: 20px;
    font-size: 15px;
    color: ${color};
  `,

  border: (width = "1px", color = "#e9edef") => css`
    border-width: ${width};
    border-style: solid;
    border-color: ${color};
  `,
};

export default mixin;

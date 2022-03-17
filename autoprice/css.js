const css = (styles) => {
  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
};

css`
  .auto-price:hover {
    cursor: pointer;
  }
  .auto-price .bg {
    background-size: cover;
    background-position: center;
  }

  .auto-price .value {
    pointer-events: none;
    font-weight: bold;
    font-size: large;
    font-family: "Arial";
    text-align: right;
    padding: 12px;
    background-repeat: no-repeat, no-repeat;
    background-position: right, left;
    background-size: cover;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .auto-price .value-bg {
  }
`;

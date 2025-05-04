export const navigationStyle = (options = {}) => {
  const {
    background = "#333",
    textColor = "white",
    hoverColor = "#4caf50",
    fontSize = "1.2rem",
  } = options;

  return `<style>
    .navigation {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${background};
      padding: 1rem;
      width: 100%;
    }

    .navigation ul {
      display: flex;
      justify-content: center;
      list-style: none;
      font-size: ${fontSize};
      padding: 0;
      margin: 0;
      width: 100%;
    }

    .navigation ul li {
      margin: 0 20px;
      color: ${textColor};
      cursor: pointer;
      transition: color 0.3s;
      text-align: center;
    }

    .navigation ul li:hover {
      color: ${hoverColor};
    }
  </style>`;
};

import { useContext } from "react";
import ThemeContext from "../context/Theme";

function Button({ text, classStyle, ...props }) {
  const theme = useContext(ThemeContext);

  return (
    <button
      {...props}
      className={`btn btn-${theme} ${classStyle ? classStyle : ""}`}
    >
      {text}
    </button>
  );
}

export default Button;

import { useEffect } from "react";
import ReactDOM from "react-dom";

const menuPortalRoot =
  typeof document !== "undefined"
    ? document.getElementById("reusable_portal")
    : null;

const el =
  typeof document !== "undefined" ? document.createElement("div") : null;

const Portal = ({ children }) => {
  useEffect(() => {
    menuPortalRoot.appendChild(el);

    return () => {
      menuPortalRoot.removeChild(el);
    };
  }, []);

  if (el) {
    return ReactDOM.createPortal(children, el);
  } else {
    return null;
  }
};

export default Portal;

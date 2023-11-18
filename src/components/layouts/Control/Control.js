import { useContext } from "react";
import { Button } from "antd";
import { MenuContext } from "../../../store/menu-context";
import {
  MENU_HOME,
  MENU_LOGIN,
  MENU_LOGOUT,
} from "../../../constants/menu.constants";
import "../../../styles/components/control.css";

function Control() {
  const { currentSelect, setCurrentSelect } = useContext(MenuContext);

  const handleOnClick = (state) => setCurrentSelect(state);

  const buttonType = (state) =>
    currentSelect === state ? "primary" : "default";

  const buttonsList = [
    { type: MENU_HOME, text: "首頁" },
    { type: MENU_LOGIN, text: "登入" },
    { type: MENU_LOGOUT, text: "登出" },
  ];
  return (
    <>
      <div className="control-wrapper">
        <h3>功能選單</h3>
        <div className="control-button-wrapper">
          {buttonsList.map((button, key) => (
            <Button
              key={key}
              type={buttonType(button.type)}
              onClick={() => handleOnClick(button.type)}
            >
              {button.text}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Control;

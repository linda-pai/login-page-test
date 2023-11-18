import { useContext } from "react";
import { MenuContext } from "../../../store/menu-context";
import {
  MENU_HOME,
  MENU_LOGIN,
  MENU_LOGOUT,
} from "../../../constants/menu.constants";
import CompanyInfo from "./home/CompanyInfo";
import LoginForm from "./login/LoginForm";
import SelectPanel from "./login/SelectPanel";
import LogoutBtn from "./logout/LogoutBtn";
import useAuth from "../../../hooks/useAuth";

import "../../../styles/components/view.css";

function View() {
  const menuCtx = useContext(MenuContext);
  const { currentSelect } = menuCtx;
  const { isLogin } = useAuth();
  const renderContent = {
    [MENU_HOME]: <CompanyInfo />,
    [MENU_LOGIN]: <div>{!isLogin ? <LoginForm /> : <SelectPanel />}</div>,
    [MENU_LOGOUT]: <LogoutBtn />,
  };

  return (
    <div className="view-wrapper">
      <div>{renderContent[currentSelect]}</div>
    </div>
  );
}

export default View;

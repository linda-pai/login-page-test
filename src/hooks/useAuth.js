import { useContext } from "react";
import { message } from "antd";
import { MenuContext } from "../store/menu-context";
import { MENU_HOME } from "../constants/menu.constants";

const useAuth = () => {
  const menuCtx = useContext(MenuContext);

  const logout = () => {
    menuCtx.setCurrentSelect(MENU_HOME);
    menuCtx.setUser(null);
    message.success("您已成功登出");
  };

  const login = async (form) => {
    try {
      const values = await form.validateFields();
      menuCtx.setUser(values);
      message.success("登入成功");
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  const isLogin = menuCtx.user;

  return {
    logout,
    login,
    isLogin,
  };
};
export default useAuth;

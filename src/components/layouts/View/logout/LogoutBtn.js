import React from "react";
import { Button } from "antd";
import useAuth from "../../../../hooks/useAuth";

const LogoutBtn = () => {
  const { logout } = useAuth();
  return (
    <div className="view-content-wrapper">
      <Button onClick={logout}>登出</Button>
    </div>
  );
};

export default LogoutBtn;

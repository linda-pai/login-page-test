import React, { useContext, useState, useRef } from "react";
import { Select, Button } from "antd";
import { MenuContext } from "../../../../store/menu-context";

const SelectPanel = () => {
  const [selectType, setSelectType] = useState(" ");
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("");

  const inputRef = useRef(null);
  const menuCtx = useContext(MenuContext);
  const { user } = menuCtx;

  const handleChange = (value) => {
    if (value) {
      setSelectValue(value);
      setSelectOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div className="view-content-wrapper">
      <h3>請選取以繼續</h3>
      <Select
        style={{ width: 280 }}
        onChange={handleChange}
        value={selectType && selectValue ? selectType + selectValue : "請選擇"}
        key={selectType}
        open={selectOpen}
        onDropdownVisibleChange={(open) => setSelectOpen(selectType && open)}
        ref={inputRef}
        options={
          selectType === "版本號"
            ? [
                { label: "1.0.0", value: "1.0.0" },
                { label: "1.0.1", value: "1.0.1" },
                { label: "1.0.2", value: "1.0.2" },
                { label: "1.1.0", value: "1.1.0" },
                { label: "2.1.0", value: "2.1.0" },
              ]
            : [
                {
                  label: `權限1 ( 帳號：${user.username}, 密碼：${user.password} )`,
                  value: "auth1",
                },
              ]
        }
        dropdownRender={(menu) => (
          <div>
            <div className="btn-wrapper">
              <Button
                onClick={() => {
                  setSelectType("版本號");
                }}
              >
                版本號
              </Button>
              <Button onClick={() => setSelectType("帳號")}>切換帳號</Button>
            </div>
            {menu}
          </div>
        )}
      ></Select>
    </div>
  );
};

export default SelectPanel;

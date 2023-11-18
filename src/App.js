import React, { useState } from "react";
import Control from "./components/layouts/Control/Control";
import View from "./components/layouts/View/View";
import "./styles/App.css";
import { MenuContext } from "./store/menu-context";
import { MENU_HOME } from "./constants/menu.constants";

function App() {
  const [currentSelect, setCurrentSelect] = useState(MENU_HOME);
  const [user, setUser] = useState(null);

  const menuContext = {
    currentSelect,
    setCurrentSelect,
    user,
    setUser,
  };

  return (
    <MenuContext.Provider value={menuContext}>
      <div className="App">
        <Control />
        <View />
      </div>
    </MenuContext.Provider>
  );
}

export default App;

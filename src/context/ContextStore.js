import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const initialState = {
  chat: false,
  cart: false,
  profile: false,
  notification: false,
};
export const ContextStore = ({ children }) => {
  const [active, setActive] = useState(true);
  const [currentCol, setCurrentCol] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSide, setThemeSide] = useState(false);
  const [clicked, setClicked] = useState(initialState);
  const [resize, setResize] = useState(null);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentCol(color);
    localStorage.setItem("colorMode", color);
    setThemeSide(false);
  };
  const clickedHandler = (pressed) => {
    setClicked({ ...initialState, [pressed]: true });
  };

  return (
    <Context.Provider
      value={{
        active,
        setActive,
        clicked,
        setClicked,
        clickedHandler,
        resize,
        setResize,
        currentCol,
        setCurrentCol,
        currentMode,
        setCurrentMode,
        themeSide,
        setThemeSide,
        setColor,
        setMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);

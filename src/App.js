import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Nav, Footer, Side, Theme } from "./component";
import {
  Area,
  Bar,
  ColorMapping,
  Line,
  Pie,
  Pyramide,
  Stacked,
  Calender,
  Customer,
  Ecommerce,
  Editor,
  Employees,
  Order,
  Kanban,
} from "./pages";
import { useStateContext } from "./context/ContextStore";
import "./App.css";

function App() {
  const {
    active,
    themeSide,
    setThemeSide,
    currentCol,
    currentMode,
    setCurrentCol,
    setCurrentMode,
  } = useStateContext();
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentCol(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className=" right-4 bottom-3 fixed z-10">
            <TooltipComponent content="Settings" position="Top">
              <button
                className="text-4xl p-3 text-white "
                style={{ backgroundColor: currentCol, borderRadius: "50%" }}
                onClick={() => setThemeSide(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {active ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white  z-40">
              <Side />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Side />
            </div>
          )}
          <div
            className={
              active
                ? "bg-main-bg min-h-screen w-full md:ml-72 dark:bg-main-dark-bg"
                : "bg-main-bg min-h-screen w-full  dark:bg-main-dark-bg flex-1"
            }
          >
            <div className=" fixed md:static bg-main-bg dark:bg-main-dark-bg w-full navbar z-10">
              <Nav />
            </div>
            <div>
              {themeSide && <Theme />}
              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                <Route path="/orders" element={<Order />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customer />} />

                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calender />} />

                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />

                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramide />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

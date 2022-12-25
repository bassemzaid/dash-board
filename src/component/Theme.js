import React from "react";
import { MdCancel } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { themeColors } from "../data/dummy";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../context/ContextStore";
const Theme = () => {
  const {
    currentCol,

    currentMode,

    themeSide,
    setThemeSide,
    setColor,
    setMode,
  } = useStateContext();
  return (
    <div className="bg-half-transparent w-screen fixed top-0 right-0 z-10 ">
      <div className=" float-right w-96 bg-white dark:bg-[#52565e] dark:text-gray-200 h-screen shadow-lg">
        <div className="flex justify-between items-center mt-3 p-3 ml-3">
          {" "}
          <p className=" text-2xl font-bold">Settings</p>
          <button
            type="button"
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            onClick={() => setThemeSide(false)}
          >
            <MdCancel />
          </button>
        </div>
        <hr />
        <div className="gap-3 flex-col p-3 ml-3 mt-2">
          <p
            className="font-semibold text-xl text-gray-600
          
          "
          >
            Theme Mode
          </p>
          <div className="mt-3">
            {" "}
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light Mode
            </label>
          </div>
          <div className="mt-2">
            {" "}
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark Mode
            </label>
          </div>
        </div>
        <hr />
        <div className="gap-3 flex-col p-3 ml-3 mt-2">
          <p
            className="font-semibold text-xl text-gray-600
          
          "
          >
            Theme Colors
          </p>
          <div className="flex gap-4 mt-5">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div
                  className="relative mt-2 cursor-pointer flex gap-5 items-center"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <AiOutlineCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentCol ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;

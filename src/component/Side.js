import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FaShopware } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { links } from "../data/dummy";
import { useStateContext } from "../context/ContextStore";

const Side = () => {
  const { active, setActive, resize } = useStateContext();
  const closeHandler = () => {
    if (active && resize <= 850) {
      setActive(false);
    }
  };
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-gray-600";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 scrollbar-hide">
      {active && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={closeHandler}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <FaShopware /> <span>Hash Board</span>
            </Link>
            <TooltipComponent content="close" position="BottomCenter">
              <button
                type="button"
                className="text-xl p-3  mt-4  "
                onClick={() => setActive(!active)}
              >
                <ImCancelCircle />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-neutral-400 dark:text-gray-400 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={closeHandler}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize font-semibold">
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Side;

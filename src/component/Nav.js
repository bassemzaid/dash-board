import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notifiction, Profile } from ".";
import { useStateContext } from "../context/ContextStore";

const NavComponent = ({ title, icon, color, func, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      onClick={() => func()}
      className="p-3 rounded-full text-2xl hover:bg-light-gray relative"
      style={{ color }}
    >
      <span
        style={{ background: dotColor }}
        className="absolute rounded-full h-2 w-2 inline-flex right-1 top-1"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Nav = () => {
  const {
    active,
    setActive,
    clicked,
    clickedHandler,
    resize,
    setResize,
    currentCol,
  } = useStateContext();

  useEffect(() => {
    const sizeHandler = () => setResize(window.innerWidth);
    window.addEventListener("resize", sizeHandler);
    sizeHandler();
    return () => window.removeEventListener("resize", sizeHandler);
  }, []);
  useEffect(() => {
    if (resize <= 850) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [resize]);
  return (
    <div className="flex justify-between p-3 mx-5 relative">
      <NavComponent
        title="Menu"
        func={() => setActive(!active)}
        color={currentCol}
        icon={<AiOutlineMenu />}
      />
      <div className="flex gap-4 justify-center">
        <NavComponent
          title="Cart"
          func={() => clickedHandler("cart")}
          color={currentCol}
          icon={<FiShoppingCart />}
        />
        <NavComponent
          title="Chat"
          func={() => clickedHandler("chat")}
          color={currentCol}
          dotColor="#00bce4"
          icon={<BsChatLeft />}
        />
        <NavComponent
          title="Notification"
          func={() => clickedHandler("notification")}
          color={currentCol}
          dotColor="#00bce4"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-2 hover:bg-light-gray"
            onClick={() => clickedHandler("profile")}
          >
            <img
              src={avatar}
              alt=""
              className="h-8 w-8 object-cover rounded-full"
            />
            <p>
              <span className="text-gray-400 text-xs">Hi, </span>
              <span className="text-gray-400 text-xs font-bold">Bassem</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-xs " />
          </div>
        </TooltipComponent>
        {clicked.cart && <Cart />}
        {clicked.chat && <Chat />}
        {clicked.notification && <Notifiction />}
        {clicked.profile && <Profile />}
      </div>
    </div>
  );
};

export default Nav;

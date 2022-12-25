import React from "react";

const Header = ({ cate, tit }) => {
  return (
    <div className="mb-9 mt-16">
      <p className="text-gray-600 text-center text-xl">{cate}</p>
      <p className="text-slate-800 text-3xl font-bold text-center">{tit}</p>
    </div>
  );
};

export default Header;

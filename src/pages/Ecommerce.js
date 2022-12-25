import React from "react";
import { BiDollar } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Button, Pie, SparkLine } from "../component";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../context/ContextStore";

const Ecommerce = () => {
  const { currentCol, currentMode } = useStateContext();
  return (
    <div className="mt-24 dark:bg-main-dark-bg ">
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
        <div className="p-8 bg-white dark:bg-secondary-dark-bg dark:text-white h-48 rounded-xl w-full lg:w-80 bt-8 m-3 bg-center bg-cover bg-no-repeat object-cover">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-xl text-gray-600">$500,650,20 </p>
            </div>
            <button
              type="button"
              className="text-2xl opacity-0.9 text-slate-500 hover:drop-shadow-xl rounded-full  p-4"
            >
              <BiDollar />
            </button>
          </div>
          <div className="mt-5">
            <Button
              color="white"
              bgColor={currentCol}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex justify-center items-center m-3 flex-wrap gap-3">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg pt-9 p-5 rounded-2xl md:w-52 cursor-pointer"
            >
              <button
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                  transition: ".4s",
                }}
                className="rounded-full p-4 text-2xl hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-4">
                <span className="text-2xl font-semibold ">{item.amount}</span>{" "}
                <span
                  className={`text-sm text-${item.pcColor} ml-2 text-gray-500`}
                >
                  {item.percentage}
                </span>{" "}
              </p>
              <p className="mt-2 text-gray-600 text-sm font-semibold">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-9 flex-wrap">
        <div className="bg-white dark:bg-secondary-dark-bg rounded-xl p-4 m-4 dark:text-gray-200 md:w-780">
          <div className="flex justify-between">
            <p className="text-xl font-medium">Revenue Updates</p>
            <div className="flex items-center justify-center gap-3">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-1 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-9 flex flex-wrap gap-8 justify-center">
            <div className="border-r-1 border-color m-4 pr-9">
              <div>
                <p>
                  <span className="text-3xl font-medium">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-6">
                <p className="text-3xl font-medium">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-4">
                <SparkLine
                  lineColor={currentCol}
                  id="line-sparkLine"
                  type="Line"
                  height="90px"
                  width="245px"
                  color={currentCol}
                  data={SparklineAreaData}
                />
              </div>
              <div className="mt-7">
                <Button
                  color="white"
                  bgColor={currentCol}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="380px" height="360px" currentMode={currentMode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;

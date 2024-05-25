/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaArrowRight,
  FaBoxesStacked,
  FaHouse,
  FaLocationDot,
} from "react-icons/fa6";
import { format } from "date-fns";
import { FaCalendar } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import AdditionalData from "./AdditionalData";
export default function MovesCards({ item }) {
  const iconClass = "flex items-center gap-2";
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 m-4">
      <div className="flex justify-between items-center text-lg">
        <div className="flex-1">
          <h1 className="font-bold text-gray-700">From</h1>
          <h1 className="text-gray-500">{item.from_address.fromAddress}</h1>
        </div>
        <div className="flex-1 mx-4">
          <FaArrowRight className="w-14 h-14 text-red-500 shadow-xl rounded-full p-3 bg-white" />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-gray-700">To</h1>
          <h1 className="text-gray-500">{item.to_address.toAddress}</h1>
        </div>
        <div className="flex flex-col items-end font-bold text-gray-700">
          <span>Request#</span>
          <span className="text-red-500">{item?.estimate_id}</span>
        </div>
      </div>
      {/* // */}
      <div className="flex flex-col lg:flex-row justify-between items-center my-4">
        <div className="flex justify-between items-center gap-2 w-full">
          <div className={iconClass}>
            <FaHouse className="text-red-500" />
            <span>{item.property_size}</span>
          </div>
          <div className={iconClass}>
            <FaBoxesStacked className="text-red-500" />
            <span>{item.total_items}</span>
          </div>
          <div className={iconClass}>
            <FaLocationDot className="text-red-500" />
            <span>{item.distance}</span>
          </div>
          <div className={iconClass}>
            <FaCalendar className="text-red-500" />
            <span>
              {format(new Date(item.moving_on), "MMM dd, yyyy 'at' p")}
            </span>
          </div>
        </div>

        <div className="flex justify-end items-center my-4 gap-4 w-full">
          <div className={iconClass}>
            <input
              type="checkbox"
              // checked
              id="checkbox"
              className="form-checkbox"
            />
            <label htmlFor="checkbox" className="ml-2 text-gray-700">
              is flexible
            </label>
          </div>

          <button
            onClick={toggleSection}
            className="border font-semibold px-2 py-2 border-red-500 rounded-sm text-red-500 hover:bg-slate-50"
          >
            View more Details
          </button>
          <button className="border font-semibold px-2 py-2 border-red-500 rounded-sm text-white bg-red-500">
            Quotes Awaiting
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <GoAlertFill className="text-red-500 w-3 h-3" />
        <div className="text-xs">
          <span className="font-bold">Disclaimer: </span>
          Please update your move data before two days of shifting
        </div>
      </div>

      {isOpen && <AdditionalData />}

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
}

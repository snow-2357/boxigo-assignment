/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ItemList from "./ItemList";

// eslint-disable-next-line react/prop-types
export default function AdditionalData({ item }) {
  // const getData = (categoryName) => {
  //   return item.items.inventory.find((item) => item.name === categoryName);
  // };
  const accordionData = item.items.inventory;

  const houseInfo = {
    old_house_additional_info: item.old_house_additional_info,
    oldFloor: item.old_floor_no,
    newFloor: item.new_floor_no,
    oldParking: item.old_parking_distance,
    newParking: item.new_parking_distance,
    oldElevator: item.old_elevator_availability,
    newElevator: item.new_elevator_availability,
  };
  return (
    <div className="space-y-4 mx-4">
      <HouseList info={houseInfo} />
      {accordionData &&
        accordionData.map((item) => {
          return (
            <Accordion
              key={item.id}
              title={item.displayName}
              count={item.category.length ?? 0}
            >
              <ItemList items={item.category} />
            </Accordion>
          );
        })}
    </div>
  );
}
// eslint-disable-next-line react/prop-types
function Accordion({ title, count, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" border-gray-300 rounded-lg mb-4">
      <div
        className="flex justify-between items-center py-2 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="bg-gray-200 w-full rounded-sm flex justify-between items-center px-4 py-2">
          <div className="font-semibold flex items-center gap-4">
            {title}
            <span className="bg-red-500 rounded-full text-xs text-white w-5 h-5 flex justify-center items-center">
              {count}
            </span>
          </div>
          <div>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
        </div>
      </div>
      {isOpen && <div className="px-4 py-2  border-gray-300">{children}</div>}
    </div>
  );
}

function HouseList({ info }) {
  console.log;
  return (
    <div className="w-full border-t pt-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-md font-bold text-lg">Additional Information</h1>
        <button className="text-xs md:text-base border font-semibold px-2 py-2 bg-black rounded-sm text-white hover:bg-gray-800">
          Edit Additional Information
        </button>
      </div>
      <p>{info?.old_house_additional_info}</p>
      <div className="flex justify-between items-center">
        <h1 className="text-md font-semibold">House Details</h1>
        <button className="border font-semibold px-4 py-2 bg-black rounded-sm text-white hover:bg-gray-800">
          Edit House Details
        </button>
      </div>

      <div className="border-gray-300 py-4 w-full lg:w-2/3">
        <div>
          <h2 className="font-semibold text-red-500">Existing House Details</h2>
          <div className="flex justify-between mt-2 mx-4">
            <div>
              <span className="font-semibold">Floor No</span>
              <div>
                <span className="f">{info?.oldFloor}</span>
              </div>
            </div>
            <div>
              <span className="font-semibold">Elevator Available.</span>
              <div>
                <span className="">{info?.oldElevator}</span>
              </div>
            </div>
            <div>
              <span className="font-semibold">
                Distance from Elevator/Staircase to truck
              </span>
              <div>
                <span className="">{info?.oldParking}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- New House Section --> */}
      <div className="border-gray-300 py4 mt-4">
        <div>
          <h2 className="font-semibold text-red-500">New House Details</h2>
          <div className="flex justify-between mt-2 mx-4">
            <div>
              <span className="font-semibold">Floor No</span>
              <div>
                <span className="">{info?.newFloor}</span>
              </div>
            </div>
            <div>
              <span className="font-semibold">Elevator Available.</span>
              <div>
                <span className="">{info?.newElevator}</span>
              </div>
            </div>
            <div>
              <span className="font-semibold">
                Distance from Elevator/Staircase to truck
              </span>
              <div>
                <span className="">{info?.newParking}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function AdditionalData() {
  return (
    <div className="space-y-4 mx-4">
      <HouseList />
      <Accordion title="Furniture">
        <p>Content for Accordion 1 goes here.</p>
      </Accordion>
      <Accordion title="Electronics">
        <p>Content for Accordion 2 goes here.</p>
      </Accordion>
      <Accordion title="Vehicle">
        <p>Content for Accordion 3 goes here.</p>
      </Accordion>
      <Accordion title="Boxes/Trolley">
        <p>Content for Accordion 4 goes here.</p>
      </Accordion>
      <Accordion title="Custom Items">
        <p>Content for Accordion 5 goes here.</p>
      </Accordion>
    </div>
  );
}
// eslint-disable-next-line react/prop-types
function Accordion({ title, children }) {
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
              12
            </span>
          </div>
          <div>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
        </div>
      </div>
      {isOpen && <div className="px-4 py-2  border-gray-300">{children}</div>}
    </div>
  );
}

function HouseList() {
  return (
    <div className="w-full border-t">
      <div className="flex justify-between items-center">
        <h1 className="text-md font-semibold">Additional Information</h1>
        <button className="border font-semibold px-2 py-2 bg-black rounded-sm text-white hover:bg-gray-800">
          Edit Additional Information
        </button>
      </div>
      <p>Test data</p>
      <div className="flex justify-between items-center">
        <h1 className="text-md font-semibold">House Details</h1>
        <button className="border font-semibold px-4 py-2 bg-black rounded-sm text-white hover:bg-gray-800">
          Edit House Details
        </button>
      </div>

      <div className="border-gray-300 py-4 w-full lg:w-2/3">
        <div>
          <h2 className="font-semibold text-red-500">Existing House Details</h2>
          <div className="flex justify-between mt-2">
            <div>
              <span className="font-semibold">Floor No</span>
              <div>
                <span className="f">3</span>
              </div>
            </div>
            <div>
              <span className="font-semibold">Elevator Available.</span>
              <div>
                <span className="">Yes</span>
              </div>
            </div>
            <div>
              <span className="font-semibold">
                Distance from Elevator/Staircase to truck
              </span>
              <div>
                <span className="">1m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- New House Section --> */}
      <div className="border-gray-300 py4 mt-4">
        <div>
          <h2 className="font-semibold text-red-500">New House Details</h2>
          <div className="flex justify-between mt-2">
            <div>
              <span className="font-semibold">Floor No</span>
              <div>
                <span className="f">5</span>
              </div>
            </div>
            <div>
              <span className="font-semibold">Elevator Available.</span>
              <div>
                <span className="">No</span>
              </div>
            </div>
            <div>
              <span className="font-semibold">
                Distance from Elevator/Staircase to truck
              </span>
              <div>
                <span className="">2m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

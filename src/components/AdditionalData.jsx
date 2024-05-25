import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function AdditionalData() {
  return (
    <div className="space-y-4">
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
        className="flex justify-between items-center px-4 py-2 cursor-pointer"
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

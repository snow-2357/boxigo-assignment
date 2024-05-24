// import "./App.css";
import { FaTruckArrowRight } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa6";
import { RiLogoutCircleRFill } from "react-icons/ri";

export default function Sidenav() {
  const currentMenu = 0;
  const iconClasses = "mx-4 h-8 w-8";
  const menuItems = [
    {
      id: 0,
      name: "My Moves",
      icon: <FaTruckArrowRight className={iconClasses} />,
    },
    {
      id: 1,
      name: "My Profile",
      icon: <IoPersonSharp className={iconClasses} />,
    },
    {
      id: 2,
      name: "Get Quote",
      icon: <FaFileInvoice className={iconClasses} />,
    },
    {
      id: 3,
      name: "Logout",
      icon: <RiLogoutCircleRFill className={iconClasses} />,
    },
  ];
  return (
    <div>
      {menuItems.map((item) => {
        return (
          <div
            key={item.id}
            className={`${
              item.id === currentMenu && "border-l-4 border-red-500"
            } flex gap-2 items-center my-4 py-2 hover:bg-gray-400 cursor-pointer`}
          >
            <div>{item.icon} </div> <h1 className="font-bold">{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

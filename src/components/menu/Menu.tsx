import { Link } from "react-router-dom";
import { menu } from "../../utils/menu";
import { useState } from "react";
import "./menu.scss";
import Logo from "../logo/Logo";
import UserIcons from "../notificationIconsIcon/UserIcons";
import HelpSettingIcons from "../notificationIconsIcon/HelpSettingIcons";
import NotificationIcons from "../notificationIconsIcon/NotificationIcons";
import SearchBar from "../searchBar/SearchBar";
import ControlledSwitches from "../switch/ControlledSwitches";

type ListItem = {
  id: number;
  url: string;
  icon: string;
  title: string;
};

type Menu = {
  id: number;
  listItems: ListItem[];
};

const Menu = () => {
  const [selectedItemId, setselectedItemID] = useState<number | null>(null);

  const handleItemClick = (itemId: number) => {
    setselectedItemID(itemId);
  };

  return (
    <div className="menuBar bg-[#27375A] w-[210px]">
      {/* Logo section */}
      <div className="logo flex justify-center items-center cursor-pointer">
        <Logo />
      </div>
      <div className="flex justify-center items-center mb-5">
        <hr className="border-t-1 w-10/12 border-white opacity-3" />
      </div>
      {/* Icon section */}
      <div className="notificationIcon flex justify-center items-center mb-[20px] cursor-pointer">
        <HelpSettingIcons />
        <UserIcons />
        <NotificationIcons />
      </div>
      {/* Menu-list section */}
      <div className="listMenu relative">
        {menu.map((Item: Menu, index: number) => (
          <div
            // add margin-top 10px ถ้าเป็น listItem.id แรก
            className={`item h-[450px] w-[205px] absolute ${
              index === 0 ? "pt-[60px]" : ""
            }`}
            key={Item.id}
          >
            {Item.listItems.map((listItem) => (
              <Link
                key={listItem.id}
                to={listItem.url}
                className={`listItem flex${
                  selectedItemId === listItem.id ? "selected" : ""
                }`}
                onClick={() => handleItemClick(listItem.id)}
              >
                <div className="listItem-content">
                  <div
                    className={`listItem-image-title my-1 ml-4 w-[189px] h-[45px] rounded-tl-[22px] rounded-br-[25px] flex items-center ${
                      selectedItemId === listItem.id
                        ? "bg-deepnavy text-white" // Change this to your desired background color
                        : "bg-white" // Change this to your default background color
                    }`}
                  >
                    <div className="iconImage mr-3">
                      <img
                        className={`image-icon w-[40px] h-[40px] drop-shadow-2xl rounded-full ${
                          selectedItemId === listItem.id
                            ? "bg-visgreen"
                            : "bg-whiteiconbg"
                        }`}
                        src={listItem.icon}
                        alt="image"
                      />
                    </div>
                    <div className="listItemTitle ml-3 bold">
                      {listItem.title}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
        {/* Search section */}
        <div className="search absolute">
          <div className="searchBTN relative drop-shadow-2xl ">
            <SearchBar message="Search" />
          </div>
        </div>
      </div>

      <footer className="absolute bottom-0 flex justify-between items-center m-3 text-white w-[210px]">
        <div>
          <p className="text-[10px]">
            Logged in as: <br /> Company Name <br /> Personal Name
          </p>
        </div>
        <div>
          <img
            src="./public/images/setting-icon.svg"
            alt="setting"
            className="image-icon"
          />
        </div>
        <div className="switch mr-4">
          <ControlledSwitches />
        </div>
      </footer>
    </div>
  );
};

export default Menu;

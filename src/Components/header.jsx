import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faEnvelope,
  
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getUser } from "../services/userApi";

const Header = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGetUser = async () => {
      try {
        setIsLoading(true);
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGetUser();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(user);

  return (
    <div className="bg-white py-2">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Left Section */}
        <div className="flex items-center gap-4 ml-10 flex-1">
          <img src={logo} alt="Logo" className="w-10 h-10 lg:w-12 lg:h-12" />
          <div className="hidden md:block max-w-[240px] lg:max-w-[320px] w-full">
            <Input
              size="large"
              placeholder="Tìm kiếm"
              prefix={<SearchOutlined />}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Action Buttons */}
          <div className="hidden md:flex gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FontAwesomeIcon icon={faHeadset} className="text-xl" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FontAwesomeIcon icon={faBell} className="text-xl" />
            </button>
          </div>

          {/* User Profile */}
          <div className="flex mr-20 gap-3">
            <img
              src={user.avatar}
              alt="avatar"
              className="w-9 h-9 rounded-full"
            />
            <div className="hidden md:block">
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-gray-500">{user.role}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import PopupDelete from "@helpers/PopupDelete";
import {
  Avatar,
  LogOutIcon,
  Menu,
  MenuIcon,
  Pane,
  Popover,
  Position,
} from "evergreen-ui";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../constants/storage";
import useToken from "@utils/hooks/useToken";

const NavigationBar = (props: any) => {
  const { collapseSidebar } = props;

  //* hooks
  const userInfo = getUserInfo();
  const navigate = useNavigate();
  const { setToken } = useToken();
  const [confirmLogout, setConfirmLogout] = React.useState(false);

  const toggleModal = () => {
    setConfirmLogout(!confirmLogout);
  };

  const handleClickLogout = () => {
    localStorage.clear();
    toggleModal();
    setToken("")
    navigate("/", { replace: true });
  };

  const popover = (
    <Menu>
      <Menu.Group>
        <Menu.Item onClick={toggleModal} icon={LogOutIcon}>
          Đăng xuất
        </Menu.Item>
      </Menu.Group>
    </Menu>
  );
  return (
    <div style={{ padding: "10px 20px" }}>
      <Pane
        className="flex flex-row lg:flex-row p-6  w-full h-6 items-center justify-between sticky"
        elevation={1}
      >
        <div onClick={() => collapseSidebar()} className="cursor-pointer">
          <MenuIcon />
        </div>
        <Popover position={Position.BOTTOM_RIGHT} content={popover}>
          <div className="flex items-center gap-1 cursor-pointer p-1">
            <div className="text-gray-500 text-md">{userInfo?.username}</div>
            <Avatar
              size={35}
              name={userInfo?.username}
              src={userInfo?.avatar}
            />
          </div>
        </Popover>
      </Pane>
      <PopupDelete
        isOpen={confirmLogout}
        toggleModal={toggleModal}
        message="Bạn có chắc muốn đăng xuất"
        onConfirm={handleClickLogout}
      />
    </div>
  );
};

export default NavigationBar;

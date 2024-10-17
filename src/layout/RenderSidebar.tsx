import { Pane } from "evergreen-ui";
import React, { memo, Fragment } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./menu";
import NavigationBar from "./NavigationBar";

const RenderSidebar = (props: any) => {
  const { children } = props;
  const location = useLocation();
  const { collapseSidebar } = useProSidebar();

  const checkDefaultOpenSubMenu = (child: Array<any>) => {
    const activePath = location.pathname;
    const listChildPath = child?.map((i) => i.path);
    const checked = listChildPath.includes(activePath);

    return checked;
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar style={{ height: "100vh" }} backgroundColor="#222d32">
        <div className="px-4 py-3">
          <img src={""} alt="" height={50} />
          <Pane className="text-cyan-400 flex justify-center font-semibold text-xl">
            HT TOPSIM
          </Pane>
        </div>
        <Menu>
          {menuItems.map((item, index) => (
            <Fragment key={index}>
              {item.children ? (
                <SubMenu
                  label={item.title}
                  icon={item.icon}
                  defaultOpen={checkDefaultOpenSubMenu(item.children)}
                >
                  {item.children.map((child, idx) => (
                    <MenuItem
                      key={idx}
                      icon={child.icon}
                      routerLink={<Link to={`${child.path}`} />}
                      active={location.pathname.indexOf(child.path) !== -1}
                      className="py-0"
                    >
                      {child.title}
                    </MenuItem>
                  ))}
                </SubMenu>
              ) : (
                <MenuItem
                  icon={item.icon}
                  routerLink={<Link to={`${item.path}`} />}
                  active={location.pathname.indexOf(item.path) !== -1}
                >
                  {item.title}
                </MenuItem>
              )}
            </Fragment>
          ))}
        </Menu>
      </Sidebar>
      <main style={{ width: "100%" }}>
        <NavigationBar collapseSidebar={collapseSidebar} />
        <div className="layout-children w-full">{children}</div>
      </main>
    </div>
  );
};

export default memo(RenderSidebar);

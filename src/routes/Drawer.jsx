import { useState } from "react";
import { Link } from "react-router-dom";
// Import React Icons
import { MdWork, MdDashboard, MdPeople, MdMenu, MdClose, MdPhone } from "react-icons/md";
import { logo } from "../assets";
import "./Drawer.css";

const Drawer = () => {
  const [open, setOpen] = useState(true);
  // Selected Link Index
    const [selected, setSelected] = useState(0);

  // Menu list Items
  const menuItems = [
    {
      listIcon: <MdDashboard />,
      listText: "Dashboard",
      listPath: "/dashboard",
    },
    {
      listIcon: <MdWork />,
      listText: "Jobs",
      listPath: "/company",
    },
    {
      listIcon: <MdPeople />,
      listText: "Candidates",
      listPath: "/pricing",
    },
  ];
  // Toggle Drawer
  const toggleDrawer = () => {
    setOpen(!open);
  };

//  // Set Selected Link
//   const setSelectedLink = (index) => {
//     setSelected(index);

  
  const LinkStyle = {
    textDecoration: "none",
  };
  return (
    <div className={`${open ? "drawer-container" : "drawer-container-small"}`}>
      <div className={`${open ? "drawer-header" : "drawer-header-small"}`}>
        <div className={`${open ? "drawer-header-logo" : "hide"}`}>
          <img src={logo} alt="logo" />
        </div>
        <div className="drawer-header-menu">
          {
            open ? (
                <MdClose  className="menu-icon"  onClick={toggleDrawer} />
            ) : (
                <MdMenu className="menu-icon" onClick={toggleDrawer} />
            )
          }
        </div>
      </div>
      <div className="drawer-menu">
        <div className="drawer-menu-items">
        <ul>
          {menuItems.map((item, index) => {
            return (
              <li key={index} className={`${open ? "drawer-menu-item" : "drawer-menu-item-small"}`}>
                <Link to={item.listPath} style={LinkStyle}>
                  <span className={`${open ? "icon" : "icon-small"}`}>{item.listIcon}</span>
                  <span className={`${open ? "text" : "hide"}`}>{item.listText}</span>
                </Link>
              </li>
            
            );
          })}
        </ul>
        </div>
        {/* Need Help  */}
        <div className={`${open ? "drawer-menu-item" : "drawer-menu-item-small"}`}>
            <Link to="/contact" style={LinkStyle}>
                <span className={`${open ? "icon" : "icon-small"}`}><MdPhone /></span>
                <span className={`${open ? "text" : "hide"}`}>Need Help?</span>'
                </Link>
           
          </div>
      </div>
    </div>
  );
};

export default Drawer;

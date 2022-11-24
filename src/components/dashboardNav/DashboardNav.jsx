import "./DashboardNav.css";
import { MdLogout } from "react-icons/md";

const DashboardNav = () => {
  return (
    <div className="nav-main-container">
        <div className="nav-left-item">
          <div className="nav-left-item-text">
            <p>TreySoft CA</p>
          </div>
          <div className="nav-left-input">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="nav-right-item">
          <MdLogout size={30} style={{ color: "#000" }} />
          <p>Logout</p>
        </div>
    </div>
  );
};

export default DashboardNav;

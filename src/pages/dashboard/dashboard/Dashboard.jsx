import { Drawer } from "../../../routes";
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className="main-container">
      <Drawer />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;

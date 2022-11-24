import { EmployeeCard } from "../../../components";
import { Drawer } from "../../../routes";
import "./Dashboard.css";

const Dashboard = () => {

  // Employee Data
  const employeeData = [
    {
      name: "John Doe",
      image: "https://i.pravatar.cc/150?img=1",
      isActive: true,
      email: "john@gmail.com",
      phone: "08012345678",
      position: "Software Engineer",
      category: "Frontend",
      availability: "Full Time",
    },
    {
      name: "Jane Doe",
      image: "https://i.pravatar.cc/150?img=5",
      isActive: false,
      email: "john@gmail.com",
      phone: "08012345678",
      position: "Secretary",
      category: "Frontend",
      availability: "Contract",
    },
    {
      name: "John Doe",
      image: "https://i.pravatar.cc/150?img=6",
      isActive: true,
      email: "john@gmail.com",
      phone: "08012345678",
      position: "Software Engineer",
      category: "Frontend",
      availability: "Part Time",
    },
    {
      name: "Jane Doe",
      image: "https://i.pravatar.cc/150?img=2",
      isActive: false,
      email: "john@gmail.com",
      phone: "08012345678",
      position: "Software Engineer",
      category: "Frontend",
      availability: "Full Time",
    },
    {
      name: "John Doe",
      image: "https://i.pravatar.cc/150?img=3",
      isActive: true,
      email: "john@gmail.com",
      phone: "08012345678",
      position: "Software Engineer",
      category: "Frontend",
      availability: "Full Time",
    },
    {
      name: "John Doe",
      image: "https://i.pravatar.cc/150?img=4",
      isActive: true,
      email: "john@gmail.com",
      phone: "08012345678",
      position: "Software Engineer",
      category: "Frontend",
      availability: "Full Time",
    },
    {
      name: "John Doe",
      image: "https://i.pravatar.cc/150?img=7",
      isActive: true,
      email: "john@gmail.com",
      phone: "08012345678",
      position: "Software Engineer",
      category: "Frontend",
      availability: "Part Time",
    },
    {
      name: "Jane Doe",
      image: "https://i.pravatar.cc/150?img=8",
      isActive: false,
      email: "john@gmail.com",
      phone: "08012345678",
      position: "Software Engineer",
      category: "Frontend",
      availability: "Full Time",
    },
    
  ]


  return (
    <div className="main-container">
      <Drawer />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <div className="dashboard-content-cards">
          {employeeData.map((employee) => (
            <EmployeeCard
              name={employee.name}
              image={employee.image}
              isActive={employee.isActive}
              email={employee.email}
              phone={employee.phone}
              position={employee.position}
              category={employee.category}
              availability={employee.availability}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

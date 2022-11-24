import { MdDownload, MdPhone, MdEmail } from "react-icons/md";
import "./Cards.css";

const EmployeeCard = ({
  name,
  image,
  isActive,
  email,
  phone,
  position,
  category,
  availability,
}) => {
  return (
    <div className="employee-card">
      <div className="employee-card-header">
        {isActive ? (
          <div className="employee-card-header-active">
            <p>Active</p>
          </div>
        ) : (
          <div className="employee-card-header-inactive">
            <p>Inactive</p>
          </div>
        )}

        <MdDownload className="employee-card-icon" />
      </div>
      <div className="employee-card-description">
        <div className="employee-card-description-image">
          <img src={image} alt="employee" />
        </div>
        <div className="employee-card-description-details">
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
      <div className="employee-card-info">
        <div className="employee-card-category-availability">
          <div className="employee-card-category">
            <h5>Category</h5>
            <p>{category}</p>
          </div>
          <div className="employee-card-availability">
            <h5>Availability</h5>
            <p>{availability}</p>
          </div>
        </div>
        <div className="employee-card-contact">
            <div className="employee-card-email">
                <MdEmail className="employee-card-icon-2" />
                <p>{email}</p>
            </div>
            <div className="employee-card-phone">
                <MdPhone className="employee-card-icon-2" />
                <p>{phone}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;

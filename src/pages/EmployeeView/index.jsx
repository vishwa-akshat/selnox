import { Link } from "react-router-dom";
import useAppStore from "../../store/appStore";

import "./styles.css";

export default function EmployeeView() {
    const { currentEmployee } = useAppStore();

    return (
        <div className="employee-view-container">
            <h1 className="heading">Employee Details</h1>
            <div className="employee-info-wrapper">
                <div className="employee-info">
                    <p className="employee bold">Name</p>
                    <p className="employee">
                        {currentEmployee.FirstName} {currentEmployee.LastName}
                    </p>
                </div>
                <div className="employee-info">
                    <p className="employee bold">DOB</p>
                    <p className="employee">{currentEmployee.DOB}</p>
                </div>
                <div className="employee-info">
                    <p className="employee bold">Study</p>
                    <p className="employee">{currentEmployee.Study}</p>
                </div>
                <div className="employee-info">
                    <p className="employee bold">Start Date</p>
                    <p className="employee">{currentEmployee.StartDate}</p>
                </div>
                <div className="employee-info">
                    <p className="employee bold">End Date</p>
                    <p className="employee">{currentEmployee.EndDate}</p>
                </div>
                <div className="employee-info">
                    <p className="employee bold">Current Salary</p>
                    <p className="employee">{currentEmployee.CurrentSalary}</p>
                </div>
                <div className="employee-info">
                    <p className="employee bold">Description</p>
                    <p className="employee">{currentEmployee.Description}</p>
                </div>
            </div>
            <Link to="/list">Go to Employee List</Link>
        </div>
    );
}

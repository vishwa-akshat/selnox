import { useState } from "react";
import useAppStore from "../../store/appStore";

import moreIcon from "../../assets/more.svg";

import ListMoreOption from "../ListMoreOption";
import "./styles.css";

export default function EmployeeDetails() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState();

    const employeeData = useAppStore((state) => state.employeeData);

    if (employeeData.length === 0) {
        return (
            <div className="list-empty-state">
                No Employee Data <a href="/">Click here to add</a>
            </div>
        );
    }

    const handleMenuClick = (id) => {
        setIsMenuOpen(true);
        setSelectedEmployee(id);
    };

    return (
        <div className="details-wrapper">
            <div className="row">
                <div className="head">Name</div>
                <div className="head">DOB</div>
                <div className="head">Start Date</div>
                <div className="head">End Date</div>
                <div className="head">Description</div>
            </div>
            {employeeData.map((employee, idx) => (
                <div
                    key={employee.name}
                    className={
                        idx === employeeData.length - 1 ? "row last-row" : "row"
                    }
                >
                    <div className="col">
                        {employee.FirstName} {employee.LastName}
                    </div>
                    <div className="col">{employee.DOB}</div>
                    <div className="col">{employee.StartDate}</div>
                    <div className="col">{employee.EndDate}</div>
                    <div
                        className="col"
                        dangerouslySetInnerHTML={{
                            __html: employee.Description,
                        }}
                    ></div>
                    <img
                        onClick={() => handleMenuClick(employee.id)}
                        className="more-icon"
                        src={moreIcon}
                        alt="more option"
                    />
                    <ListMoreOption
                        selectedEmployee={selectedEmployee}
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                        employeeDetails={employee}
                    />
                </div>
            ))}
        </div>
    );
}

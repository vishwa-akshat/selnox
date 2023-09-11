/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import EmployeeRegistrationForm from "../../components/EmployeeRegistrayionForm";
import "./styles.css";

function EmployeeRegistration({ isEdit }) {
    return (
        <section className="employee-container">
            <h1 className="heading">
                {isEdit ? "Employee Edit Form" : "Employee Registration Form"}
            </h1>
            <Link to="/list">Go to Employee List</Link>
            <EmployeeRegistrationForm isEdit={isEdit} />
        </section>
    );
}

export default EmployeeRegistration;

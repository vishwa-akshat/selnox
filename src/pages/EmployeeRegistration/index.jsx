import EmployeeRegistrationForm from "../../components/EmployeeRegistrayionForm";
import "./styles.css";

function EmployeeRegistration() {
    return (
        <section className="employee-container">
            <h1 className="employee-registration-heading">
                Employee Registration Form
            </h1>
            <EmployeeRegistrationForm />
        </section>
    );
}

export default EmployeeRegistration;

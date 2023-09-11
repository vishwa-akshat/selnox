/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import EmployeeDetails from "../../components/EmployeeDetails";

import useAppStore from "../../store/appStore";

import "./styles.css";

export default function EmployeeList() {
    const { fetchEmployeeData } = useAppStore();

    useEffect(() => {
        fetchEmployeeData();
    }, []);

    return (
        <section className="employee-list-container">
            <h1 className="heading">Employee List</h1>
            <div className="list-wrapper">
                <EmployeeDetails />
            </div>
        </section>
    );
}

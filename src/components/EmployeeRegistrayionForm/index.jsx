/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import useAppStore from "../../store/appStore";

import "./styles.css";

const initial = {
    FirstName: "",
    LastName: "",
    DOB: "",
    Study: "",
    StartDate: "",
    EndDate: "",
    CurrentSalary: "",
    Description: "",
};

export default function EmployeeRegistrationForm({ isEdit }) {
    const { currentEmployee, postEmployee, updateEmployee } = useAppStore();

    const [formInput, setFormInput] = useState(
        isEdit ? currentEmployee : initial
    );

    const navigation = useNavigate();

    const handleSubmit = () => {
        if (isEdit) {
            updateEmployee(formInput);
        } else {
            if (formInput.FirstName && formInput.LastName) {
                postEmployee(formInput);
            }
        }
        navigation("/list");
    };

    const handleOnChange = (event) => {
        const {
            target: { name, value },
        } = event;
        setFormInput({ ...formInput, [name]: value });
    };

    const handleQuillChange = (value) => {
        setFormInput({ ...formInput, Description: value });
    };

    const handleCancel = () => {
        navigation("/list");
    };

    return (
        <div className="employee-registration-form-wrapper">
            <div className="dual-input-wrapper">
                <div className="input-wrapper">
                    <label className="form-label">First Name*</label>
                    <input
                        onChange={handleOnChange}
                        name="FirstName"
                        className="form-input"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="input-wrapper">
                    <label className="form-label">Last Name*</label>
                    <input
                        onChange={handleOnChange}
                        name="LastName"
                        className="form-input"
                        placeholder="Enter your name"
                    />
                </div>
            </div>
            <div className="input-wrapper">
                <label className="form-label">DOB</label>
                <input
                    onChange={handleOnChange}
                    name="DOB"
                    type="date"
                    className="form-input"
                    placeholder="Enter your dob"
                />
            </div>
            <div className="input-wrapper">
                <label className="form-label">Study</label>
                <div className="form-dropdown-wrapper">
                    <select
                        onChange={handleOnChange}
                        name="Study"
                        className="form-dropdown"
                    >
                        <option value="B.E">B.E</option>
                        <option value="BCA">BCA</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="B.Com">B.Com</option>
                        <option value="B.S.C.">B.S.C.</option>
                    </select>
                </div>
            </div>
            <div className="dual-input-wrapper">
                <div className="input-wrapper">
                    <label className="form-label">Start Date</label>
                    <input
                        onChange={handleOnChange}
                        name="StartDate"
                        type="date"
                        className="form-input"
                    />
                </div>
                <div className="input-wrapper">
                    <label className="form-label">End Date</label>
                    <input
                        onChange={handleOnChange}
                        name="EndDate"
                        type="date"
                        className="form-input"
                    />
                </div>
            </div>
            <div className="input-wrapper">
                <label className="form-label">Current Salary</label>
                <input
                    onChange={handleOnChange}
                    name="CurrentSalary"
                    className="form-input"
                    placeholder="Enter your current salary"
                />
            </div>
            <div className="input-wrapper">
                <label className="form-label">Description</label>
                <ReactQuill
                    theme="snow"
                    value={formInput.Description}
                    onChange={handleQuillChange}
                />
            </div>
            <div className="dual-input-wrapper btn-wrapper">
                <button onClick={handleCancel} className="cancel-btn">
                    Cancel
                </button>
                <button onClick={handleSubmit} className="save-btn">
                    Save
                </button>
            </div>
        </div>
    );
}

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";

export default function EmployeeRegistrationForm() {
    const [value, setValue] = useState("");
    return (
        <div className="employee-registration-form-wrapper">
            <div className="dual-input-wrapper">
                <div className="input-wrapper">
                    <label className="form-label">First Name*</label>
                    <input
                        className="form-input"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="input-wrapper">
                    <label className="form-label">Last Name*</label>
                    <input
                        className="form-input"
                        placeholder="Enter your name"
                    />
                </div>
            </div>
            <div className="input-wrapper">
                <label className="form-label">DOB</label>
                <input
                    type="date"
                    className="form-input"
                    placeholder="Enter your dob"
                />
            </div>
            <div className="input-wrapper">
                <label className="form-label">Study</label>
                <div className="form-dropdown-wrapper">
                    <select className="form-dropdown" name="fruit">
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="cherry">Cherry</option>
                        <option value="grape">Grape</option>
                        <option value="orange">Orange</option>
                    </select>
                </div>
            </div>
            <div className="dual-input-wrapper">
                <div className="input-wrapper">
                    <label className="form-label">Start Date</label>
                    <input type="date" className="form-input" />
                </div>
                <div className="input-wrapper">
                    <label className="form-label">End Date</label>
                    <input type="date" className="form-input" />
                </div>
            </div>
            <div className="input-wrapper">
                <label className="form-label">Current Salary</label>
                <input
                    className="form-input"
                    placeholder="Enter your current salary"
                />
            </div>
            <div className="input-wrapper">
                <label className="form-label">Description</label>
                <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
            <div className="dual-input-wrapper btn-wrapper">
                <button className="cancel-btn">Cancel</button>
                <button className="save-btn">Save</button>
            </div>
        </div>
    );
}

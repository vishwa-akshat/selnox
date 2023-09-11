/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import visibilityIcon from "../../assets/visibility.svg";
import editIcon from "../../assets/edit.svg";
import trashIcon from "../../assets/trash.svg";

import useAppStore from "../../store/appStore";

import "./styles.css";

export default function ListMoreOption({
    selectedEmployee,
    isMenuOpen,
    setIsMenuOpen,
    employeeDetails,
}) {
    let navigate = useNavigate();
    const { setCurrentEmployee } = useAppStore();
    const options = [
        {
            id: 1,
            name: "View",
            icon: visibilityIcon,
            handleClick: () => {
                setCurrentEmployee(employeeDetails);
                setIsMenuOpen(false);
                navigate("/view");
            },
            iconWidth: 17,
            iconHeight: 12,
        },
        {
            id: 2,
            name: "Edit",
            icon: editIcon,
            handleClick: () => {
                setIsMenuOpen(false);
            },
            iconWidth: 12,
            iconHeight: 12,
        },
        {
            id: 3,
            name: "Delete",
            icon: trashIcon,
            handleClick: () => {
                setIsMenuOpen(false);
            },
            iconWidth: 12,
            iconHeight: 15,
        },
    ];

    if (isMenuOpen && selectedEmployee === employeeDetails.id) {
        return (
            <div className="list-more-option-wrapper">
                {options.map((option, idx) => (
                    <div
                        key={option.id}
                        className={
                            options.length - 1 === idx
                                ? "option option-last"
                                : "option"
                        }
                        onClick={option.handleClick}
                    >
                        <img
                            style={{
                                width: option.iconWidth,
                                height: option.iconHeight,
                            }}
                            src={option.icon}
                            alt={option.name}
                        />
                        <p className="option-text">{option.name}</p>
                    </div>
                ))}
            </div>
        );
    }

    return <></>;
}

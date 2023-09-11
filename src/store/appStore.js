import { create } from "zustand";
import {
    fetchEmployeeData,
    deleteEmployee,
    postEmployee,
    updateEmployee,
} from "../api";

const useAppStore = create((set, get) => ({
    employeeData: [],
    currentEmployee: null,
    setCurrentEmployee: (employee) => set({ currentEmployee: employee }),
    fetchEmployeeData: async () => {
        try {
            const data = await fetchEmployeeData();
            set({ employeeData: data });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    },
    postEmployee: async (details) => {
        try {
            await postEmployee(details);
        } catch (error) {
            console.error("Error Adding Employee:", error);
        }
    },
    updateEmployee: async (details) => {
        try {
            await updateEmployee(details);
        } catch (error) {
            console.error("Error Updating Employee:", error);
        }
    },
    deleteEmployee: async (id) => {
        try {
            await deleteEmployee(id);
            get().fetchEmployeeData();
        } catch (error) {
            console.error("Error Deleting Employee:", error);
        }
    },
}));

export default useAppStore;

import { create } from "zustand";
import { fetchEmployeeData } from "../api";

const useAppStore = create((set) => ({
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
}));

export default useAppStore;

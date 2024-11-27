import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom?: string;
  availableUntil?: string;
  course: string;
}

interface AssignmentsState {
  assignments: Assignment[];
}

// Initial state
const initialState: AssignmentsState = {
  assignments: [], // Initialize with an empty array
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments.push(action.payload); // Add new assignment
    },
    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === action.payload._id ? action.payload : assignment // Update the matching assignment
      );
    },
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload // Remove the matching assignment
      );
    },
  },
});

// Export actions
export const { addAssignment, updateAssignment, deleteAssignment } = assignmentsSlice.actions;

// Export reducer
export default assignmentsSlice.reducer;

// enrollmentSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define your types for enrollment
interface Enrollment {
    _id: string;
    user: string;
    course: string;
}

interface EnrollmentState {
    enrollments: Enrollment[];
}

// Create the enrollment slice
const enrollmentSlice = createSlice({
    name: 'enrollment',
    initialState: {
        enrollments: JSON.parse(localStorage.getItem('enrollments') || '[]') as Enrollment[],
    } as EnrollmentState,
    reducers: {
        enroll: (state, action: PayloadAction<Enrollment>) => {
            state.enrollments.push(action.payload);
            localStorage.setItem('enrollments', JSON.stringify(state.enrollments));
        },
        unenroll: (state, action: PayloadAction<string>) => {
            state.enrollments = state.enrollments.filter(enrollment => enrollment._id !== action.payload);
            localStorage.setItem('enrollments', JSON.stringify(state.enrollments));
        },
        setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
            state.enrollments = action.payload;
            localStorage.setItem('enrollments', JSON.stringify(action.payload));
        },
    },
});

// Export the actions and the reducer
export const { enroll, unenroll, setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;

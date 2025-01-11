import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  formData: null,
  submissionSuccess: false,
};

// Create a slice
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submitForm(state, action) {
      state.formData = action.payload;
      state.submissionSuccess = false;
    },
    submitFormSuccess(state) {
      state.submissionSuccess = true;
    },
  },
});

// Export actions
export const { submitForm, submitFormSuccess } = formSlice.actions;

// Export the reducer
export default formSlice.reducer;

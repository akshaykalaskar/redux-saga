import { SUBMIT_FORM, SUBMIT_FORM_SUCCESS } from './actions';

const initialState = {
  formData: null,
  submissionSuccess: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        formData: action.payload,
        submissionSuccess: false,
      };
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        submissionSuccess: true,
      };
    default:
      return state;
  }
};

export default rootReducer;

export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';

export const submitForm = (data) => ({
  type: SUBMIT_FORM,
  payload: data,
});

export const submitFormSuccess = () => ({
  type: SUBMIT_FORM_SUCCESS,
});

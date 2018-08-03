import { SEND_FIRST_NAME, SEND_LAST_NAME, SEND_EMAIL } from './types';

export const sendFirstName = () => {
  return {
    type: SEND_FIRST_NAME,
    payload: firstName,
  }
};

export const sendLastName = () => {
  return {
    type: SEND_LAST_NAME,
    payload: lastName,
  }
};

export const sendEmail = () => {
  return {
    type: SEND_EMAIL,
    payload: email,
  }
};

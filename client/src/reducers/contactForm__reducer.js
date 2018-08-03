import { SEND_EMAIL, SEND_FIRST_NAME, SEND_LAST_NAME } from '../actions/types';

const initialState = {
  firstName: '',
  lastName: '',
  email: ''
}

export default (state = initialState, action) => {
  console.log(action)

  switch(action.type) {
    case SEND_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case SEND_LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };
    case SEND_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};
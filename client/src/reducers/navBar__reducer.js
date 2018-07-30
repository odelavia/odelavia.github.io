import { OPEN_NAV, CLOSE_NAV } from '../actions/types';

const initialState = {
  navOpen: false,
  display: 'none',
}

export default (state = initialState, action) => {
  // console.log('action:',action)

  switch(action.type) {
    case OPEN_NAV:
      return {
        ...state,
        navOpen: action.payload.navOpen,
        display: action.payload.display,
      };
    case CLOSE_NAV:
      return {
        ...state,
        navOpen: action.payload.navOpen,
        display: action.payload.display,
      };
    default:
      return state;
  }
};
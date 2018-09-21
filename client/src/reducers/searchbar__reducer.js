import { SEARCH_FILTER } from '../actions/types';

const initialState = {
  filter: '',
}

export default (state = initialState, action) => {
  // console.log('action:',action)

  switch(action.type) {
    case SEARCH_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    default:
      return state;
  }
};
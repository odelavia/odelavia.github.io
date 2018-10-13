import { SEARCH_FILTER, SET_FILTER_TYPE } from '../actions/types';

const initialState = {
  filter: '',
  type: 'tech',
}

export default (state = initialState, action) => {
  // console.log('action:',action)

  switch(action.type) {
    case SEARCH_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    case SET_FILTER_TYPE:
      return {
        ...state,
        type: action.payload.type,
      };
    default:
      return state;
  }
};
import { SEARCH_FILTER, SET_FILTER_TYPE } from './types';

export const searchFilter = (filter) => {
  return {
    type: SEARCH_FILTER,
    payload: {
      filter
    }
  }
}

export const setFilterType = (type) => {
  return {
    type: SET_FILTER_TYPE,
    payload: {
      type
    }
  }
}
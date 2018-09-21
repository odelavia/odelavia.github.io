import { SEARCH_FILTER } from './types';

export const searchFilter = (filter) => {
  return {
    type: SEARCH_FILTER,
    payload: {
      filter
    }
  }
}
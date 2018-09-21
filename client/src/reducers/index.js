import { combineReducers } from 'redux';
import { reducer as reduxForm__Reducer } from 'redux-form';
import navBar__reducer from './navBar__reducer';
import searchbar__reducer from './searchbar__reducer';

const reducer = combineReducers({
  form: reduxForm__Reducer, // mounted under "form"
  navBar: navBar__reducer,
  searchbar: searchbar__reducer,
});

export default reducer;
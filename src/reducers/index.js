import { combineReducers } from 'redux';
import todoReducer from './todo_reducer';
import { reducer as formReducer, formPropTypes} from 'redux-form';

export default combineReducers({
    todo: todoReducer,
    form: formReducer
});

import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import authReducer from './AuthReducer'
import streamsReducer from './streamsReducer';
export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamsReducer
})
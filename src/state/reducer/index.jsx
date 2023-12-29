import { combineReducers } from "redux";
import statusReducer from './statusdReducer';


const reducers = combineReducers({
    status: statusReducer
})

export default reducers
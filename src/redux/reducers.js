import {SEND_MSG} from "./actions";
import {combineReducers} from "redux";


const message = (state=[],action)=>{
    switch (action.type){
        case SEND_MSG:
            return action.payload
        default:
            return state
    }
}



export default combineReducers({message})
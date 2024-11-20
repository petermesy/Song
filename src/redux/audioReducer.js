import { playAudio } from "./action";
import { PLAY_AUDIO, STOP_AUDIO } from "./constant";


const initialState={playAudio:false};
export const audioReducer=(state=initialState, action)=>{
    switch(action.type){
        case "PLAY_AUDIO":
            return {...state, playAudio:true}
        case "STOP_AUDIO":
            return {...state, playAudio:false}
        default:
            return state;
    
}}
export default audioReducer;

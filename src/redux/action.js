// import {ADD_TO_CART} from './constant';
import {ADD_SONG} from './constant';
// import {REMOVE_FROM_CART} from './constant';
import {REMOVE_SONG} from './constant';
// import {EMTY_CART} from './constant'
import {EMPTY_SONG} from './constant';

import {PLAY_AUDIO} from './constant';
import {STOP_AUDIO} from './constant'
export const addSong=(data)=>{
    console.warn("action is called",data)
    return {
        type: ADD_SONG,
        data
    }
}
export const removeSong=(data)=>{
    console.warn("action is called",data)
    return {
        type: REMOVE_SONG,
        data
    }
}
export const emptySong=()=>{
    console.warn("action is called")
    return {
        type: EMPTY_SONG,       
    }

    
}
export const playAudio=()=>{
    console.warn("action is called")
    return {
        type: PLAY_AUDIO,       
    }
}
export const stopAudio=()=>{
    console.warn("action is called")
    return {
        type: STOP_AUDIO,       
    }
}
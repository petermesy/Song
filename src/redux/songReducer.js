import { SET_SONG_LIST} from './constant';

export const productData = (data = [], action) => {
  console.warn("reducer called", action);
 switch(action.type){
  case SET_SONG_LIST:
  console.warn("Song list condition", action)
  return [...action.data]
 
; 
   default: 
    return data
 }
};

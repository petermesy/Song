import { ADD_SONG, REMOVE_SONG, EMPTY_SONG } from "./constant";

export const cartData = (data = [], action) => {
  console.warn("reducer called", action);
  switch (action.type) {
    case ADD_SONG:
      console.warn("addSong condition", action);
      // Return a new array with the added item at the beginning
      return [action.data, ...data];
      
    case REMOVE_SONG:
      console.warn("removeSong condition", action);
      // Use filter to create a new array without the song to be removed
      return data.filter((item) => item.id !== action.data);
      
    case EMPTY_SONG:
      console.warn("emptySong condition", action);
      // Return an empty array instead of modifying the existing one
      return [];
      
    default:
      return data;
  }
};

import {takeEvery, put} from "redux-saga/effects"
import { SONG_ACTION,SET_SONG_LIST } from "./constant";

function* getProducts(){ 
    let data =yield fetch('http://localhost:3500/product');
    data = yield data.json();
    console.warn("get song saga called",data);
    yield put({type:SET_SONG_LIST,data})
}
function* productSaga()
{
  yield takeEvery(SONG_ACTION,getProducts)
}
export default productSaga;
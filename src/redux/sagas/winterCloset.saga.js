import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchWinterCloset(action) {
    try{
        yield put({ type: 'GET_WINTER_CLOSET', payload: action})

    } catch(error){
        console.log('error in fetchWinterCloset', error);
        
    }
}


function* winterClosetSaga() {
    yield takeLatest('FETCH_WINTER_CLOSET', fetchWinterCloset);
}

export default winterClosetSaga;
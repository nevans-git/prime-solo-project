import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchWinterCloset(action) {
    try{
        const response = yield axios.get('/api/seasons/winter'); 
        
        yield put({ type: 'SET_WINTER_CLOSET', payload: response.data}); // LEFT OFF HERE... UPDATED EACH CLOSET ROUTER  AND MADE ROUTES IN SERVER.JS

    } catch(error){
        console.log('error in fetchWinterCloset', error);
        
    }
}


function* winterClosetSaga() {
    yield takeLatest('FETCH_WINTER_CLOSET', fetchWinterCloset);
}

export default winterClosetSaga;
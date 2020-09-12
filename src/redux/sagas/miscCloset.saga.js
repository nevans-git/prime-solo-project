import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchMiscCloset(action) {
    try{
        const response = yield axios.get('/api/misc'); // make a route for this is router and server.js
        
        yield put({ type: 'SET_MISC_CLOSET', payload: response.data}); // LEFT OFF HERE... UPDATED EACH CLOSET ROUTER  AND MADE ROUTES IN SERVER.JS

    } catch(error){
        console.log('error in fetchMiscCloset', error);
        
    }
}


function* winterClosetSaga() {
    yield takeLatest('FETCH_MISC_CLOSET', fetchMiscCloset);
}

export default winterClosetSaga;
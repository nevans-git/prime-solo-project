import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchFallCloset(action) {
    try{
        const response = yield axios.get('/api/seasons');
        
        yield put({ type: 'SET_FALL_CLOSET', payload: response.data})

    } catch(error){
        console.log('error in fetchFallCloset', error);
        
    }
}


function* fallClosetSaga() {
    yield takeLatest('FETCH_FALL_CLOSET', fetchFallCloset);
}

export default fallClosetSaga;
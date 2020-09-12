import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSpringSummerCloset(action) {
    try{
        const response = yield axios.get('/api/seasons/spring-summer');
        
        yield put({ type: 'SET_SPRING_SUMMER_CLOSET', payload: response.data})

    } catch(error){
        console.log('error in fetchFallCloset', error);
        
    }
}


function* springSummerClosetSaga() {
    yield takeLatest('FETCH_SPRING_SUMMER_CLOSET', fetchSpringSummerCloset);
}

export default springSummerClosetSaga;
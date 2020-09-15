import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sendAddedItem(action) {
    console.log('trying to send new item!');
    
    try{
        const response = yield axios.post('/api/addItems', action.payload);

        console.log(response);


        
        
        yield put({ type: 'FETCH_FALL_CLOSET', payload: response.data});

    } catch(error){
        console.log('error in sendAddeditems', error);
        
    }
}


function* sendClosetSaga() {
    yield takeLatest('SEND_ADDED_ITEMS', sendAddedItem);
}

export default sendClosetSaga;
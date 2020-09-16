import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteEntireItem(action) {
    console.log('trying to delete closet item!');
    console.log(action.payload);
    
    try{
        const response = yield axios.delete('/api/seasons/fall/' + action.payload);

        console.log(response);

        
        yield put({ type: 'FETCH_FALL_CLOSET'});

    } catch(error){
        console.log('error in deleteClosetItem SAGA', error);
        
    }
}


function* deleteClosetItem() {
    yield takeLatest('DELETE_CLOSET_ITEM', deleteEntireItem);
}

export default deleteClosetItem;
import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import fallClosetSaga from './fallCloset.saga'; // imported fallClosetSaga function
import winterClosetSaga from './winterCloset.saga'; // imported winterClosetSaga function
import springSummerClosetSaga from './springSummerCloset.saga';
import sendClosetSaga from './addItems.saga';
import deleteClosetItem from './deleteItem.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    fallClosetSaga(),
    winterClosetSaga(),
    springSummerClosetSaga(),
    sendClosetSaga(),
    deleteClosetItem(),
  ]);
}

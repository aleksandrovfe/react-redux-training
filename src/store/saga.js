import {takeEvery, put, call} from 'redux-saga/effects'
import {FETCH_USERS, REQUEST_USERS} from "./action_types";
import {showLoader, hideLoader} from "./actions/appActions";

export function* sagaWatcher () {
    yield takeEvery(REQUEST_USERS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchUsers)
        yield put({type: FETCH_USERS, payload})
        yield put(hideLoader())
    } catch (error) {
        yield put(hideLoader())
        console.error(error)
    }
}

const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return await response.json()
}

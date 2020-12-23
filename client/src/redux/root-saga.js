import {all} from '@redux-saga/core/effects'
import postSagas from "./post/post.sagas";

export default function* rootSaga() {
    yield all([
        postSagas()
    ])
}

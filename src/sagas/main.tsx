import { all, fork } from 'redux-saga/effects';
import { listenBeerRelatedActions } from './beers';

export function* mainSaga() {
    yield all([
        fork(listenBeerRelatedActions)
    ]);
}

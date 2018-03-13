import { takeLatest, put, call } from 'redux-saga/effects';
import MockAdapter from 'axios-mock-adapter';
import { APP_INITIALIZED, BEERS_FETCH_DONE, BEERS_FETCH_FAILED } from '../constants/actions';
import axios, { AxiosRequestConfig } from 'axios';

// Mocking Axios
const mock = new MockAdapter(axios);

// Mocking GET /beers
mock.onGet('/beers').reply(200, {
    beers: [ 'John Smith', 'Samuel Adams']
});

const axiosConfig = {
    baseURL: 'https://my-api/1.0',
    timeout: 10000
};
const axiosInstance = axios.create(axiosConfig);

export function* listenBeerRelatedActions() {
    yield takeLatest(APP_INITIALIZED, fetchBeers);
}

function* fetchBeers(action): any {
    try {
        const response = yield call(axiosInstance.get, 'beers');
        const beers = JSON.parse(response.data);
        yield put({type: BEERS_FETCH_DONE, beers});
    } catch (error) {
        yield put({type: BEERS_FETCH_FAILED, error});
    }
}
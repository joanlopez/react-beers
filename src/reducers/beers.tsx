import { IBeer } from '../models/beers';
import { initialState } from '../redux/state';
import {
    BEERS_FETCH_DONE
} from '../constants/actions';

export default function beersReducer(state: IBeer[] = initialState.beers, action: any): IBeer[] {
    switch (action.type) {
        case BEERS_FETCH_DONE:
            return action.beers;
        default:
            return state;
    }
}
import { BEERS_LOADED } from '../actions/index';
import { IState, IAction } from '../store/state';

const initialState: IState = {beers: []};

export default function beersReducer(state: IState = initialState, action: IAction) {
    switch (action.type) {
        case BEERS_LOADED: {
            return state.beers = action.beers;
        }
        default:
            return state;
    }
}
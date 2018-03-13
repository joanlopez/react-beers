import { IBeer } from '../models/beers';

export const initialState: IState = {
    beers: []
};

export interface IState {
    beers: IBeer[];
}
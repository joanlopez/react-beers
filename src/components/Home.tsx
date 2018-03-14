import * as React from 'react';
import { IBeer } from '../models/beers';
import { IState } from '../redux/state';
import { APP_INITIALIZED } from '../constants/actions';
import { connect } from 'react-redux';

interface IReduxStateProps {
    beers: IBeer[];
}

interface IReduxDispatchProps {
    appInitialized: () => void;
}

const mapStateToProps = (state: IState): IReduxStateProps => {
    return {
        beers: state.beers
    };
};

const mapDispatchToProps = (dispatch: Function): IReduxDispatchProps => ({
    appInitialized: () => dispatch({type: APP_INITIALIZED})
});

class Home extends React.Component<IReduxStateProps & IReduxDispatchProps, {}> {

    public componentDidMount() {
        this.props.appInitialized();
    }

    public render() {

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">ReactBeers</h1>
                </header>
                <ul>
                    {this.props.beers.map((beer: IBeer, i) => <li key={i}>{beer.name}</li>)}
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

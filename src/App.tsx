import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { IBeer } from './models/beers';
import { IState } from './redux/state';
import { APP_INITIALIZED } from './constants/actions';

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

class App extends React.Component<IReduxStateProps & IReduxDispatchProps, {}> {

    public componentDidMount() {
        this.props.appInitialized();
    }

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
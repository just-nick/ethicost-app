import * as React from 'react';
import {connect, DispatchProp, Provider, ProviderProps} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import AuthorizeComponent from './auth/authorize.component';
import LandingComponent from './landing/landing.component';
import ScoreCardComponent from './score/score-card.component';
import {SessionActions} from './session/session.actions';

const AUTH_CLIENT_ID: string = process.env.MACQUARIE_CLIENT_ID;
const AUTH_STATE: string = 'NSW';
const AUTH_PATH = 'https://sandbox.api.macquariebank.io/connect/v1/user-interface/login';
const AUTH_URL: string = `${AUTH_PATH}?client_id=${AUTH_CLIENT_ID}&state=${AUTH_STATE}`;

class Application extends React.Component<any, any> {
    constructor(props: ProviderProps & DispatchProp<any>) {
        super(props);
        this.props.dispatch(SessionActions.get());
    }

    public render() {
        return (
            <div className="ethicost">
                <header>
                    <a href="/" className="brand">
                        <h1>
                            EthiCost
                        </h1>
                    </a>

                    <span className="login">
                        {this.getLoginButton()}
                    </span>
                </header>
                <div className="body">
                    <Provider store={this.props.store}>
                        <BrowserRouter>
                            <switch>
                                <Route exact path="/" component={LandingComponent as any}/>
                                <Route exact path="/score" component={ScoreCardComponent as any}/>
                                <Route exact path="/authorizing" component={AuthorizeComponent as any}/>
                            </switch>
                        </BrowserRouter>
                    </Provider>
                </div>
                <footer></footer>
            </div>
        );
    }

    public getLoginButton() {
        if (this.props.session.authenticated) {
            return (
                <button onClick={this.logout.bind(this)}>
                    Logout
                </button>
            );
        }

        return (
            <button onClick={this.goToLogin}>
                Login
            </button>
        );
    }

    public goToLogin() {
        window.location.href = AUTH_URL;
    }

    public logout() {
        localStorage.removeItem('idToken');
        this.props.dispatch(SessionActions.get());

    }
}

export default connect<{}, {}, ProviderProps>((state) => ({
    session: state.sessionReducer,
}))(Application);

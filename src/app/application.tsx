import * as React from 'react';
import {connect, DispatchProp, Provider, ProviderProps} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingComponent from './landing/landing.component';
// import BuyerComponent from './app/buyer/buyer.component';
// import {SaintActions} from './app/saint/saint.actions';
// import SaintChooserComponent from './app/saint/saint-chooser/saint-chooser.component';

class Application extends React.Component<ProviderProps & DispatchProp<any>, {}> {
    private AUTH_CLIENT_ID: string = 'aqMchxLQ3sldvvKEZxMBmd95lBhnhm4z';
    private AUTH_STATE: string = 'NSW';
    private AUTH_URL: string = `https://sandbox.api.macquariebank.io/connect/v1/user-interface/login?client_id=${this.AUTH_CLIENT_ID}&state=${this.AUTH_STATE}`;

    constructor(props: ProviderProps & DispatchProp<any>) {
        super(props);
        //this.props.dispatch(SaintActions.find());
    }

    render() {
        return (
            <div className="ethicost">
                <header>
                    <h1>EthiCost</h1>
                    <a href={this.AUTH_URL}>Login</a>
                </header>
                <div className="body">
                    <Provider store={this.props.store}>
                        <BrowserRouter>
                            <switch>
                                <Route exact path="/" component={LandingComponent as any}/>
                            </switch>
                        </BrowserRouter>
                    </Provider>
                </div>
                <footer></footer>
            </div>
        );
    }
}

export default connect<{}, {}, ProviderProps>(() => ({}))(Application);
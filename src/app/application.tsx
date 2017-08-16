import * as React from 'react';
import {connect, DispatchProp, Provider, ProviderProps} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingComponent from './landing/landing.component';
// import BuyerComponent from './app/buyer/buyer.component';
// import {SaintActions} from './app/saint/saint.actions';
// import SaintChooserComponent from './app/saint/saint-chooser/saint-chooser.component';

class Application extends React.Component<ProviderProps & DispatchProp<any>, {}> {
    constructor(props: ProviderProps & DispatchProp<any>) {
        super(props);
        //this.props.dispatch(SaintActions.find());
    }

    render() {
        return (
            <div className="ethicost">
                <header>EthiCost</header>
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
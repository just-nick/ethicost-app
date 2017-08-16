import * as React from 'react';
import {connect, DispatchProp, Provider, ProviderProps} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import AuthorizeComponent from './auth/authorize.component';
import LandingComponent from './landing/landing.component';
import ScoreCardComponent from './score/score-card.component';

class Application extends React.Component<ProviderProps & DispatchProp<any>, {}> {
    constructor(props: ProviderProps & DispatchProp<any>) {
        super(props);
    }

    public render() {
        return (
            <div className="ethicost">
                <header>
                    <h1>EthiCost</h1>
                </header>
                <div className="body">
                    <Provider store={this.props.store}>
                        <BrowserRouter>
                            <switch>
                                <Route exact path="/" component={LandingComponent as any} />
                                <Route exact path="/score" component={ScoreCardComponent as any} />
                                <Route exact path="/authorizing" component={AuthorizeComponent as any}/>
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

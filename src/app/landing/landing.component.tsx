import * as React from 'react';
import {connect, ProviderProps} from 'react-redux';
import {Application} from '../application';
import ScoreCardComponent from '../score/score-card.component';
import {SessionActions} from '../session/session.actions';
import TransactionListComponent from '../transaction/transaction-list.component';

export class LandingComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.props.dispatch(SessionActions.get());
    }

    public render() {
        return (
            <div>
                {this.getHomeHtml()}
            </div>
        );
    }

    public getHomeHtml() {
        if (this.props.session.authenticated) {
            return (
                <div>
                    <ScoreCardComponent />
                    <TransactionListComponent />
                </div>
            );
        }

        return (
            <div>
                <h1>Welcome to Ethicost</h1>
                <p>Ethicost keeps you honest by analysing your spending and rating how ethical it is.</p>
                <a className="get-started" href={Application.AUTH_URL}>Get started</a>
            </div>
        );
    }
}

export default connect<{}, {}, ProviderProps>((state) => ({
    session: state.sessionReducer,
}))(LandingComponent);

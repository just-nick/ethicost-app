import * as React from "react";
import {connect} from 'react-redux';
import {ScoreActions} from './score.actions';
import LoaderComponent from '../loader/loader.component';
import {fbSdk} from '../common/facebook-sdk';

class ScoreCardComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.props.dispatch(ScoreActions.get());
    }

    public share() {
        fbSdk.get().then(() => {
            FB.login((response) => {
                console.log(response);
            }, {scope: 'public_profile'});
        });
    }

    public render() {
        let score = this.props.score;
        if (score.loading) {
            return (<LoaderComponent/>);
        }
        else {
            return (
                <div className="score-card">
                    <h1>My Ethiscore</h1>
                    <div className="score">{score.value}</div>
                    <br />
                    <div className="sharethis-inline-share-buttons"></div>
                </div>
            );
        }
    }
}

export default connect((state) => ({
    score: state.scoreReducer
}))(ScoreCardComponent);
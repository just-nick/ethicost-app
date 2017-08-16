import * as React from "react";
import {connect} from 'react-redux';
import {ScoreActions} from './score.actions';
import LoaderComponent from '../loader/loader.component';

class ScoreCardComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.props.dispatch(ScoreActions.get());
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
                </div>
            );
        }
    }
}

export default connect((state) => ({
    score: state.scoreReducer
}))(ScoreCardComponent);
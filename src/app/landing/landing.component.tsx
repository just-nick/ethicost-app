import * as React from "react";
import {connect} from 'react-redux';
import {ScoreActions} from '../score/score.actions';

class LandingComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>Welcome to Ethicost</h1>
                <p>This is content</p>
                <a href="/score">Get score (Temporary)</a>
            </div>
        )
    }
}

export default connect((state) => ({
    score: state.scoreReducer
}))(LandingComponent);
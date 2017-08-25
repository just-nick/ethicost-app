import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class LandingComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>Welcome to Ethicost</h1>
                <p>This is content</p>
                <br/>
                <Link to="/score">Get score (Temporary)</Link>
            </div>
        );
    }
}

export default connect((state) => ({
    score: state.scoreReducer,
}))(LandingComponent);

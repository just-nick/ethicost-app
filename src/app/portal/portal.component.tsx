import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class PortalComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>You are logged in!</h1>
                <br/>
                <Link to="/score">Get score (Temporary)</Link>
            </div>
        );
    }
}

export default connect((state) => ({
    score: state.scoreReducer,
    session: state.sessionReducer,
}))(PortalComponent);

import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class LandingComponent extends React.Component<any, any> {
    private AUTH_CLIENT_ID: string = process.env.AUTH_CLIENT_ID;
    private AUTH_STATE: string = 'NSW';
    private AUTH_URL: string = `https://sandbox.api.macquariebank.io/connect/v1/user-interface/login?client_id=${this.AUTH_CLIENT_ID}&state=${this.AUTH_STATE}`;

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
                <br/>
                <a href={this.AUTH_URL}>Login</a>
            </div>
        );
    }
}

export default connect((state) => ({
    score: state.scoreReducer,
}))(LandingComponent);

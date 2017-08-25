import * as React from 'react';

export default class LandingComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>Welcome to Ethicost</h1>
                <p>Ethicost keeps you honest by analysing your spending and rating how ethical it is.</p>
                <a className="get-started" href={this.AUTH_URL}>Get started</a>
            </div>
        );
    }
}

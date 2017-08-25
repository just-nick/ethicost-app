import * as React from 'react';

export default class LandingComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>Welcome to Ethicost</h1>
                <p>This is content</p>
            </div>
        );
    }
}

import * as React from 'react';

export default class AuthorizeComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <p>
                    Authorizing...
                </p>
            </div>
        );
    }
}

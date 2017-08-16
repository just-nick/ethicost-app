import * as React from 'react';
import OauthService from './oauth.service';
import OauthTokenResponse from './oauthtokenresponse';

export default class AuthorizeComponent extends React.Component<any, any> {
    private oauthService: OauthService;
    private queryParams: URLSearchParams;
    private authCode: string;
    private authScope: string;
    private authState: string;

    constructor(props: any) {
        super(props);

        this.queryParams = new URLSearchParams(this.props.location.search);
        this.authCode = this.queryParams.get('code');
        this.authScope = this.queryParams.get('scope');
        this.authState = this.queryParams.get('state');

        this.oauthService = new OauthService();

        this.oauthService.getToken().then((oAuthTokenResponse: OauthTokenResponse) => {
            localStorage.setItem('token', oAuthTokenResponse.token);
        }).catch((error: Error) => {
            console.error('error', error.message);
        });
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

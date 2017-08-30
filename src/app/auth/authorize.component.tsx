import * as React from 'react';
import {connect} from 'react-redux';
import {SessionActions} from '../session/session.actions';
import OauthService from './oauth.service';
import LoaderComponent from '../loader/loader.component';

class AuthorizeComponent extends React.Component<any, any> {
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

        this.oauthService.getToken(this.authCode).then((oAuthTokenResponse: string) => {
            localStorage.setItem('idToken', oAuthTokenResponse);
            this.props.dispatch(SessionActions.get());
            this.props.history.push('/');
        }).catch((error: Error) => {
            console.error('error', error.message);
            this.props.history.push('/');
        });
    }

    public render() {
        return (
            <div>
                <h1>
                    Authorizing...
                </h1>
                <LoaderComponent/>
            </div>
        );
    }
}

export default connect((state) => ({
    session: state.sessionReducer,
}))(AuthorizeComponent);

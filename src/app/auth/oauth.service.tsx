import OauthTokenResponse from './oauthtokenresponse';

export default class OauthService {
    constructor() {
    }

    public getToken(): Promise<OauthTokenResponse> {
        return fetch('/api/oauth/token').then((response: Response) => {
            if (response.status < 200 || response.status > 300) {
                throw new Error(response.statusText);
            }

            return response.json();
        });
    }
};

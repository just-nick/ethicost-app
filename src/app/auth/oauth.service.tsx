import OauthTokenResponse from './oauthtokenresponse';

export default class OauthService {
    constructor() {
    }

    public getToken(accessCode: string): Promise<String> {
        return fetch('/api/oauth/token?accessCode=' + accessCode).then((response: Response) => {
            if (response.status < 200 || response.status > 300) {
                throw new Error(response.statusText);
            }

            return response.text();
        });
    }
};

export namespace fbSdk {
    let fbReadyState = false;
    let resolveFb: Function;

    // Facebook SDK
    (function (d, s, id) {
        var js: HTMLScriptElement;
        var fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }

        js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = fbReady;

    export function get() {
        return new Promise((resolve) => {
            if(fbReadyState) {
                resolve(FB);
            }
            else {
                resolveFb = resolve;
            }
        });
    }

    function fbReady() {
        console.log('Facebook ready');

        FB.init({
            appId: process.env.FB_APP_ID,
            version: 'v2.9',
            cookie: true,
            xfbml: false
        });

        fbReadyState = true;
        if(resolveFb) {
            resolveFb(FB);
        }
    }
}
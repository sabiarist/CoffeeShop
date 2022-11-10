/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
    production: false,
    apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
    auth0: {
        url: 'dev-i33lyiydailzk7fn.us.auth0.com', // the auth0 domain prefix
        audience: 'coffee', // the audience set for the auth0 app
        clientId: 'QK1wDA6gM42lZ57d1hwQwlEB7M5Yu6Pb', // the client id generated for the auth0 app
        callbackURL: 'http://localhost:8100', // the base url of the running ionic application.
    }
};

import FormData from 'FormData';
import * as actions from '../constants/actions/auth';
import base64 from 'react-native-base64';

export const authService = {
    Login,
};

function Login() {

	var formData = new FormData();
	formData.append('grant_type', 'client_credentials');

	var base64Encode = base64.encode(actions.CONSUMER_KEY + ":" + actions.SECRUITY_KEY);

	console.log("base64: " + base64Encode);

    return fetch('https://api.twitter.com/oauth2/token', {
             method: 'POST',
             headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + base64Encode,
              'Host': 'api.twitter.com'
            },
            body: formData

          }).then((response) => response.json());
}
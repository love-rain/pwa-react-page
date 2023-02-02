import {initializeApp} from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAqLfkgqaaQrXHiUR_pSHHmFDqQNK2skFs",
    authDomain: "test-pwa-notification-1c400.firebaseapp.com",
    projectId: "test-pwa-notification-1c400",
    storageBucket: "test-pwa-notification-1c400.appspot.com",
    messagingSenderId: "463382126532",
    appId: "1:463382126532:web:18365e2e70eecd21ed8e91",
    measurementId: "G-E0EBHZDGH5"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound: (val: string)=> void) => {
    return getToken(messaging, {vapidKey: 'BMGGzi3k92QB1T_obtxPU2W3bXXE5IyzrP28puA6GCe6ca1uNcAicuCVfBgf62O_Q27F8Zfa2KYPez2jhsk7kSk'}).then((currentToken) => {
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(currentToken);
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
        } else {
            console.log('No registration token available. Request permission to generate one.');
            // shows on the UI that permission is required
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // catch error while creating client token
    });
}

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });

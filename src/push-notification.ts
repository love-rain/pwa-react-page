import {getMessaging, getToken, onMessage} from 'firebase/messaging';

async function requestPermission() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
        } else {
            console.log('Unable to get permission to notify.');
        }
    });
}

export const messageListener = () => {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
        // ...
    });
}
export const askForPermissionToReceiveNotifications = async () => {
    try {
        await requestPermission()
        const messaging = getMessaging();
        const token = await getToken(messaging, {vapidKey: 'BMGGzi3k92QB1T_obtxPU2W3bXXE5IyzrP28puA6GCe6ca1uNcAicuCVfBgf62O_Q27F8Zfa2KYPez2jhsk7kSk'});
        console.log('Your token is:', token);
        return token;
    } catch (error) {
        console.error(error);
    }
}

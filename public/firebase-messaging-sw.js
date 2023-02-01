// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyAqLfkgqaaQrXHiUR_pSHHmFDqQNK2skFs",
    authDomain: "test-pwa-notification-1c400.firebaseapp.com",
    projectId: "test-pwa-notification-1c400",
    storageBucket: "test-pwa-notification-1c400.appspot.com",
    messagingSenderId: "463382126532",
    appId: "1:463382126532:web:18365e2e70eecd21ed8e91",
    measurementId: "G-E0EBHZDGH5"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//     console.log('Received background message ', payload);
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//     };
//
//     self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });

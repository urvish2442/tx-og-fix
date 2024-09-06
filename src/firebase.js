import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMlYqBa08W01XBCWvdl9IOwsXUZ-nuLUM",
    authDomain: "tesseractx-321b0.firebaseapp.com",
    projectId: "tesseractx-321b0",
    storageBucket: "tesseractx-321b0.appspot.com",
    messagingSenderId: "83184855782",
    appId: "1:83184855782:web:57d33bd6e1a189c6c7e927",
    measurementId: "G-QMQ8F2CF0Y"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const messaging = async () => {
  const supported = await isSupported();
  return supported ? getMessaging(app) : null;
};

export const fetchToken = async () => {
  console.log(process.env.PUBLIC_VAPIDKEY,"process.env.PUBLIC_VAPIDKEY,");
  
  try {
    const fcmMessaging = await messaging();
    if (fcmMessaging) {
      const token = await getToken(fcmMessaging, {
        vapidKey: process.env.FCM_VAPIDKEY,
      });
      return token;
    }
    return null;
  } catch (err) {
    console.error("An error occurred while fetching the token:", err);
    return null;
  }
};

export { app, messaging };

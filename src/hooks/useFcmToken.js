"use client";

import { useEffect, useRef, useState } from "react";
import { getToken, onMessage } from "firebase/messaging";
import { fetchToken, messaging } from "@/firebase";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
    followAction,
    getUserAction,
    updateUserAction,
    addUserFCMkeys,
    updateNotificationPreference,
    UpdateEmail,
    updateNotificationInfo,
    deleteUserAction

} from "@/redux/actions/globalAction";
import { useActiveWeb3React } from "./useActiveWeb3React";

async function getNotificationPermissionAndToken() {
  if (!("Notification" in window)) {
    console.info("This browser does not support desktop notification");
    return null;
  }

  if (Notification.permission === "granted") {
    return await fetchToken();
  }

  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      return await fetchToken();
    }
  }

  console.log("Notification permission not granted.");
  return null;
}

const useFcmToken = () => {
  const router = useRouter();
  const [notificationPermissionStatus, setNotificationPermissionStatus] = useState(null);
  const [token, setToken] = useState(null);
  const retryLoadToken = useRef(0);
  const isLoading = useRef(false);

  const dispatch = useDispatch();
  const { account, signMessage } = useActiveWeb3React();


  const loadToken = async () => {
    if (isLoading.current) return;

    isLoading.current = true;
    const token = await getNotificationPermissionAndToken();

    if (Notification.permission === "denied") {
      setNotificationPermissionStatus("denied");
      console.info(
        "%cPush Notifications issue - permission denied",
        "color: green; background: #c7c7c7; padding: 8px; font-size: 20px"
      );
      isLoading.current = false;
      return;
    }

    if (!token) {
      if (retryLoadToken.current >= 3) {
        alert("Unable to load token, refresh the browser");
        console.info(
          "%cPush Notifications issue - unable to load token after 3 retries",
          "color: green; background: #c7c7c7; padding: 8px; font-size: 20px"
        );
        isLoading.current = false;
        return;
      }

      retryLoadToken.current += 1;
      console.error("An error occurred while retrieving token. Retrying...");
      isLoading.current = false;
      await loadToken();
      return;
    }

    setNotificationPermissionStatus(Notification.permission);
    setToken(token);
    console.log(token,"token");
    
    isLoading.current = false;
    await addFCM(token)
    return token;
  };


  const addFCM = async (fcmToken) => {
    const data = await dispatch(addUserFCMkeys({ fcmToken, signMessage }));
    return data;
};

  useEffect(() => {
    if ("Notification" in window) {
      loadToken();
    }
  }, []);

  return { token, notificationPermissionStatus,loadToken };
};

export default useFcmToken;

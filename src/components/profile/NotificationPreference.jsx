import { globalState } from "@/redux/reducer/globalSlice";
import React, { useEffect, useState } from "react";
import ToggleButton from "./Helper/ToggleButton";
import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Itembox from "./Helper/Itembox";
import { getAnalytics } from "firebase/analytics";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { toast } from "react-toastify";
import { Button, FormGroup, Input, Label } from "@/styles/pages/main.style";
import Mailpopup from "./Helper/Mailpopup";
import WpPopup from "./Helper/WpPopup";
import useFcmToken from "@/hooks/useFcmToken";
import {
  getUserService,
  addNotificationPreference,
} from "@/redux/services/globalServices";
import { useEditUser } from "@/hooks/useProfileHook";

export const TAB = [
  {
    name: "Personal",
  },
  {
    name: "Following",
  },
  {
    name: "Collections",
  },
  {
    name: "System",
  },
];

export const personalNotificationPreferences = [
  {
    key: "listingItem",
    name: "Listing Item",
    dec: "When you successfully listed an item" ,
  },
  {
    key: "itemSold",
    name: "Item Sold",
    dec: "When someone purchased one of your items",
  },
  {
    key: "bidActivity",
    name: "Bid Activity",
    dec: "When someone bids on one of your items",
  },
  {
    key: "priceChange",
    name: "Price Change",
    dec: "When an item you made an offer on changes in price",
  },
  {
    key: "auctionExpiration",
    name: "Auction Expiration",
    dec: "When a timed auction you created ends",
  },
  {
    key: "successfulPurchase",
    name: "Successful Purchase",
    dec: "When you successfully buy an item",
  },
  {
    key: "successfulMint",
    name: "Successful Mint",
    dec: "When you successfully mint an item",
  },
];

const preferencesBar = {
  personalDesktopPreferences: "personalDesktopPreferences",
  personalEmailPreferences: "personalEmailPreferences",
  personalWhatsappPreferences: "personalWhatsappPreferences",
};

const NotificationPreference = () => {
  const { account } = useActiveWeb3React();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { userDetails, loading } = useSelector(globalState) || {};
  const { addFCM, updateNotification ,setNotificationInfo} = useEditUser();
  const [mailmodalIsOpen, setmailmodalIsOpen] = useState(false);
  const [wpmodalIsOpen, setwpmodalIsOpen] = useState(false);
  const [enableLoading, setEnableLoading] = useState(false);
  const { token, notificationPermissionStatus ,loadToken} = useFcmToken();
  const [activebar, setactivebar] = useState(
    preferencesBar.personalDesktopPreferences
  );
  console.log(token,"token");
  

  // window.OneSignal = window.OneSignal || [];
  // const OneSignal = window.OneSignal;

  // const initOneSignal = async () => {
  //   OneSignal.push(function () {
  //     OneSignal.init({
  //       appId: "7fb88ce6-4a17-42f5-9fd8-7c1eacc92646",
  //       safari_web_id:
  //         "web.onesignal.auto.204803f7-478b-4564-9a97-0318e873c676",
  //       notifyButton: {
  //         enable: false,
  //       },
  //       allowLocalhostAsSecureOrigin: true,
  //     });
  //   });

  //   console.log("one signal");
  // };

  // useEffect(() => {
  //   initOneSignal();
  // }, [OneSignal]);

  // const Subcribe_onesignal = async () => {
  //   OneSignal.login(account.toLowerCase().slice(2));
  //   console.log("calls//");
  // };

  //   useEffect(() => {

  //     window.OneSignal = window.OneSignal || [];
  //     console.log( window.OneSignal," window.OneSignal");
  //     OneSignal.push(function () {
  //         OneSignal.init({
  //           appId: "8021b0e1-da93-4cc0-a0f9-af5e114d8cf3",
  //       safari_web_id: "web.onesignal.auto.477dedc8-8bcf-40fd-b64c-238033111672",
  //       notifyButton: {
  //         enable: true,
  //       },
  //       allowLocalhostAsSecureOrigin: true,
  //         });
  //     });

  //     return () => {
  //         window.OneSignal = undefined;
  //     };
  // }, [  ]);

  const isNotificationsEnabled =
    userDetails &&
    userDetails.notificationsEnabled &&
    checkNotificationPermission();

  const [preferences, setPreferences] = useState({
    personalDesktopPreferences: {
      listingItem:false,
      itemSold: false,
      bidActivity: false,
      priceChange: false,
      auctionExpiration: false,
      successfulPurchase: false,
      successfulMint: false,
    },
    personalEmailPreferences: {
      listingItem:false,
      itemSold: false,
      bidActivity: false,
      priceChange: false,
      auctionExpiration: false,
      successfulPurchase: false,
      successfulMint: false,
    },
    personalWhatsappPreferences: {
      listingItem:false,
      itemSold: false,
      bidActivity: false,
      priceChange: false,
      auctionExpiration: false,
      successfulPurchase: false,
      successfulMint: false,
    },
  });

  const [preferencesEnabled, setPreferencesEnabled] = useState({
    desktopNotificationsEnabled: false,
    emailNotificationsEnabled: false,
    whatsappNotificationsEnabled: false,
  });

  useEffect(() => {
    if (userDetails) {
      setPreferencesEnabled((prevPreferences) => ({
        ...prevPreferences,
        desktopNotificationsEnabled:
          userDetails.desktopNotificationsEnabled || false,
        emailNotificationsEnabled:
          userDetails.emailNotificationsEnabled || false,
        whatsappNotificationsEnabled:
          userDetails.whatsappNotificationsEnabled || false,
      }));
    }
  }, [userDetails]);

  useEffect(() => {
    if (loading) {
      setmailmodalIsOpen(false);
    }
  }, [loading]);

  useEffect(() => {
    if (userDetails.preferences) {
      if (userDetails.preferences.hasOwnProperty(activebar)) {
        // Update preferences state
        setPreferences((prevPreferences) => ({
          ...prevPreferences,
          [activebar]: { ...userDetails.preferences[activebar] },
        }));
      }
    } 
  }, [isNotificationsEnabled, userDetails, activebar]);



  const enabled = (() => {
    if (activebar === preferencesBar.personalDesktopPreferences) {
      return preferencesEnabled.desktopNotificationsEnabled;
    } else if (activebar === preferencesBar.personalEmailPreferences) {
      return preferencesEnabled.emailNotificationsEnabled;
    } else if (activebar === preferencesBar.personalWhatsappPreferences) {
      return preferencesEnabled.whatsappNotificationsEnabled;
    }
    return false;
  })();

  // Function to update preference
  const updatePreference = (type, key, value) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [type]: {
        ...prevPreferences[type],
        [key]: value,
      },
    }));
  };

  const EnableDisables = async () => {
    setEnableLoading(true);
    if (userDetails?.desktopNotificationsEnabled && checkNotificationPermission()) {
      console.log("already done ");
      const data = await addFCM("");
      setEnableLoading(false);
    } else {
      await requestPermission();
    }
  };

  const EnableNotification = async () => {
    let updatedPreferences = { ...preferencesEnabled };

    if (activebar === preferencesBar.personalDesktopPreferences) {
      updatedPreferences.desktopNotificationsEnabled = !preferencesEnabled.desktopNotificationsEnabled;
    } else if (activebar === preferencesBar.personalEmailPreferences) {
      updatedPreferences.emailNotificationsEnabled = !preferencesEnabled.emailNotificationsEnabled;
    } else if (activebar === preferencesBar.personalWhatsappPreferences) {
      updatedPreferences.whatsappNotificationsEnabled = !preferencesEnabled.whatsappNotificationsEnabled;
    }

    setEnableLoading(true);
     await setNotificationInfo(updatedPreferences);

     if(activebar===personalDesktopPreferences){
      
     }
     setEnableLoading(false);

     

  };

  const OpenEmail = () => {
    setactivebar(preferencesBar.personalEmailPreferences);
    setmailmodalIsOpen(true);
  };

  const OpenWhatsapp = () => {
    setactivebar(preferencesBar.personalWhatsappPreferences);
   setwpmodalIsOpen(true)
  };

  return (
    <div className="tab-block-right">
      <h2 className="title-text-right ">Edit Notification</h2>

      <div className="notification-top-bar">
        {/* top bar */}

        <div className="toggle-btn-main">
          <ToggleButton
            enabled={enabled}
            onClick={() => EnableNotification()}
            disabled={enableLoading}
          />
          {/* <div class="toggle">
	<input type="checkbox" id="btn" />
	<label for="btn">
		<span class="thumb"></span>
	</label>
</div>  */}

          <div>Enable</div>
        </div>

        {/* top bar */}

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Mailpopup
            isOpen={mailmodalIsOpen}
            onRequestClose={() => setmailmodalIsOpen(false)}
          />
          <WpPopup      isOpen={wpmodalIsOpen}
            onRequestClose={() => setwpmodalIsOpen(false)}/>

          <button
            className={`notification-email-btn ${
              activebar === preferencesBar.personalDesktopPreferences
                ? "notification-email-btn-active"
                : "opacity-60"
            }`}
            onClick={() =>
              setactivebar(preferencesBar.personalDesktopPreferences)
            }
          >
            Desktop
          </button>

          <button
            className={`notification-email-btn ${
              activebar == preferencesBar.personalEmailPreferences
                ? "notification-email-btn-active"
                : "opacity-60"
            }`}
            onClick={() => OpenEmail()}
          >
            Email
          </button>

          <button
            className={`notification-email-btn ${
              activebar == preferencesBar.personalWhatsappPreferences
                ? "notification-email-btn-active"
                : "opacity-60"
            }`}
            onClick={() => OpenWhatsapp()}
          >
            Whatsapp
          </button>
        </div>
      </div>

      {/* tab */}

      <div>
        <div className="tab-notification">
          {TAB.map((tab, index) => (
            <div
              key={index}
              className={index === activeTabIndex ? "active-tab" : ""}
              onClick={() => setActiveTabIndex(index)}
            >
              <div className="text-tab-notification">{tab.name}</div>
            </div>
          ))}
        </div>

        {/* content  */}

        <div className="tab-content">
          {activeTabIndex === 0 && (
            <div className="n-Preferences">
              {personalNotificationPreferences?.map((e) => {
                const keys = e?.key;
                const value = preferences?.[activebar]?.[keys] ?? false;
   
                return (
                  <Itembox
                    title={e.name}
                    dec={e.dec}
                    loading={loading }
                    type={keys}
                    mainObj={activebar}
                    account={account}
                    isChecked={value}
                    updatePreference={updatePreference}
                    isAllowed={enabled}
                  />
                );
              })}
            </div>
          )}
          {activeTabIndex === 1 && <div>Content for Tab 2</div>}
          {activeTabIndex === 2 && <div>Content for Tab 3</div>}
          {activeTabIndex === 3 && <div>Content for Tab 4</div>}
        </div>

        <div className="load-more-btn full-width-block">
          <Button
            disabled={loading}
            onClick={() => {
              updateNotification(activebar, preferences[activebar]);
            }}
          >
            Update Setting
          </Button>
        </div>

        {/* content  */}
      </div>

      {/* tab */}
    </div>
  );
};

export default NotificationPreference;

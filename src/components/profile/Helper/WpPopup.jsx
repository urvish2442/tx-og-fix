import React, { useEffect, useState } from "react";
import { globalState } from "@/redux/reducer/globalSlice";
import {
  Button,
  CommonModalMain,
  FormGroup,
  Input,
  Label,
} from "@/styles/pages/main.style";
import { toast } from "react-toastify";
import { Modal, Spinner } from "react-bootstrap";
import { useEditUser } from "@/hooks/useProfileHook";
import { useSelector } from "react-redux";
// import PhoneInput from "react-phone-input-2";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const WpPopup = ({ isOpen, onRequestClose, trigger, content }) => {
  const { setNotificationInfo } = useEditUser();
  const { userDetails, loading } = useSelector(globalState) || {};
  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [EnableLoading,setEnableLoading] = useState(false)

  useEffect(() => {
    if (userDetails) {
      setPhone(userDetails?.phoneNumber || "");
    }
  }, [userDetails]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);

    if (data != "" && data != undefined) {
      setPhone(data);
      const isvalid = isValidPhoneNumber(data);
      setIsValidPhone(isvalid);
    }
  };

  const handleSubmit = async () => {
    if (!isValidPhone) return;
    setEnableLoading(true)
    const data = {
      phoneNumber: phone,
    };
   const update = await setNotificationInfo(data);
   setEnableLoading(false)
  };

  return (
    <CommonModalMain show={isOpen} onHide={onRequestClose}>
      <Modal.Header closeButton={true}>
        <Modal.Title>Subscribe for Updates</Modal.Title>
      </Modal.Header>

      <div
        style={{
          padding: "20px",
        }}
        className=""
      >
        <div className="price-block-inner">
          <div className="py-3">
            <div className="pb-2 font-medium">Whatsapp Number</div>

            <PhoneInput
              country={"us"}
              value={phone}
              onChange={onSubmit}
              className={`py-2 border rounded-2xl px-3 tracking-[1px]  ${
                isValidPhone ? "" : "border-red-500"
              }`}
              inputStyle={{
                width: "100%",
                marginBottom: "20px",
              }}
            />
            {/* <div className="mt-1 px-2 text-red-500">
          {!isValidPhone &&"Number is not valid"}
          </div> */}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Button
              disabled={loading || !isValidPhone || EnableLoading}
              onClick={handleSubmit}
              className="disabled:opacity-65"
            >
              {userDetails?.phoneNumber ? "Update" : "Submit"}
            </Button>
          </div>
        </div>
      </div>
    </CommonModalMain>
  );
};

export default WpPopup;

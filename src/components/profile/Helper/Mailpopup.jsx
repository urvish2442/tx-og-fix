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
const Mailpopup = ({ isOpen, onRequestClose, trigger, content }) => {
  const { setNotificationInfo } = useEditUser();
  const { userDetails, loading } = useSelector(globalState) || {};
  const [email, setEmail] = useState("");
  const [EnableLoading,setEnableLoading] = useState(false)

  useEffect(() => {
    if (userDetails) {
     setEmail(userDetails.email)
    }
  }, [userDetails]);



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email format');
      return; 
    }
  
    const data ={
      email
    }
    setEnableLoading(true)
    await setNotificationInfo(data);
    setEnableLoading(false)
    console.log("Email submitted:", email);
  }


  return (
    <CommonModalMain show={isOpen} onHide={onRequestClose}>
      <Modal.Header closeButton>
        <Modal.Title>Subscribe for Updates</Modal.Title>
      </Modal.Header>

      <div
        style={{
          padding: "20px",
        }}
        className=""
      >
        <div className="price-block-inner">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            style={{
              marginBottom: "20px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Button disabled={loading || EnableLoading} onClick={handleSubmit}>
              {userDetails?.email!="" ? "Update" : "Subscribe"}
            </Button>
          </div>
        </div>
      </div>
    </CommonModalMain>
  );
};

export default Mailpopup;

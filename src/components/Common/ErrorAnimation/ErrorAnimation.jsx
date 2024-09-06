import React from "react";
import Lottie from "react-lottie";
import ErrorJsn from "@/components/Common/ErrorAnimation/ErrorJsn.json";

const ErrorAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ErrorJsn,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            scale: 0.05,
        },
    };
    return (
        <>
            <Lottie options={defaultOptions} />
        </>
    );
};

export default ErrorAnimation;

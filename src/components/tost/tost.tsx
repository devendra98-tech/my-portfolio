import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "./tost-components";

type Props = {
  message: string;
  type: "success" | "warning" | "error" | "info";
};

export default function Toast({ message, type = "success" }: Props) {
  useEffect(() => {
    if (message) {
      toast[type](message);
    }
  }, [message, type]);
  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
        closeButton={false}
      />
    </Container>
  );
}

import React from "react";
import { wrapper } from "../store";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import "../css/custom.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
    />
  </>
);

export default wrapper.withRedux(MyApp);

import React, { Fragment } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  const Toast = () => {
  
    return (
      <Fragment>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        
    <ToastContainer />
      </Fragment>
    )
  }

  const ToastEmitter = (type, message) => {
    toast[type](message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      draggable: false
    });
    
  }

  export { Toast, ToastEmitter }
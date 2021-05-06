import React, { Component } from 'react'
import App from 'base-shell/lib'
import MUIConfig from 'material-ui-shell/lib'
import merge from 'base-shell/lib/utils/config'
import _config from './config'
import { ConfirmProvider } from 'material-ui-confirm';
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const config = merge(MUIConfig, _config)

export default class Demo extends Component {
  render() {
    return (
      <ConfirmProvider>
        <Helmet>
          <title>{ 'E-Lamove' }</title>
        </Helmet>
        <ToastContainer />
        <App config={config} />
      </ConfirmProvider>
    )
  }
}

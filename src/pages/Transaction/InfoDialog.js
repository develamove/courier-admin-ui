import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState, Fragment } from 'react'
import _ from 'lodash';
import axios from 'axios'
import { useAuth } from 'base-shell/lib/providers/Auth'
import { ToastEmitter } from '../../components/Toast';

const transanctionInfo = {
  item_type: 'S',
  item_amount: 0,
  total_amount: 0,
  service_fees_payor: 'sender',
  package: {
    item_name: '',
    item_description: '',
    item_value: 0,
    payment_method: 'regular',
    package: {
      name: 'Small',
      item_type: 'S',
      item_code: 'S',
      rate: 60,
      weight: 'Max weight: 3 kg',
      size: '23.7cm x 39.8cm',
      description: ''
    }
  },
  sender: {
    full_name: '',
    province_name: '',
    province: {
      name: ''
    },
    city_name: '',
    city: {
      name: ''
    },
    district_name: '',
    district: {
      area: 'metro_manila',
      name: '',
      postal_code: ''
    },
    cellphone_no: '',
    street: '',
    landmarks: ''
  },
  recipient: {
    full_name: '',
    province_name: '',
    province: {
      area: 'metro_manila',
      name: ''
    },
    city_name: '',
    city: {
      name: ''
    },
    district_name: '',
    district: {
      name: '',
      postal_code: ''
    },
    cellphone_no: '',
    street: '',
    landmarks: ''
  }
}

const InfoDialog = (props) => {
  const auth = useAuth()
  const { isOpen, transaction, handleClose } = props
  console.log(transaction)
  const [transactionInfo] = useState(transaction !== undefined ? transaction : transanctionInfo)
  const [isDialogOpen, setDialogOpen] = useState(isOpen !== undefined ? isOpen : false)
  const [receiptID, setReceiptID] = useState(transaction.receipt_id !== undefined ? transaction.receipt_id : '')

  const handleDialogState = (isOpen) => {
    setDialogOpen((isOpen === true) ? false : !isDialogOpen)
  }

  const handleDialogClose = () => {
    handleDialogState(true)
    handleClose('info')
  }

  const transformItemType = (itemType) => {
    const itemTypes = {
      'S': 'Small',
      'M': 'Medium',
      'L': 'Large',
      'B': 'Box'
    }

    return itemTypes[itemType]
  }

  const saveInfo = () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.auth.token}`,
    }

    axios.put(process.env.REACT_APP_WEB_API + '/deliveries/' + transaction['id'].toString(), {
      receipt_id: receiptID
    }, {
      headers: headers
    })
    .then(function (response) {
      if (_.isEmpty(response.data.errors) === false) {
        if ('receipt_id' in response.data.errors) {
          ToastEmitter('error', 'Receipt ID is already existing!')
        } else {
          ToastEmitter('error', 'Failed to update!')
        }
      } else {
        ToastEmitter('success', 'Trasanction is now updated!')
        handleDialogClose()
      }
      
    })
    .catch(function (error) {
      if (error.response.status === 401) {
        ToastEmitter('error', 'Session expired, please re-login!')
        setTimeout(function(){
          auth.setAuth({ isAuthenticated: false })
        }, 1500);
      } else {
        ToastEmitter('error', 'Something wrong, please refresh the page!')
      }
    })
  }

  return (
    <Fragment>
      <Dialog open={isDialogOpen} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle>Transaction Details</DialogTitle>

        <DialogContent>
          <Typography variant="h6" gutterBottom>
            General Info
          </Typography>
            <p>
              Tracking No.: {transactionInfo.tracking_number} <br />
              Receipt ID: {transactionInfo.receipt_id === '' ? 'N/A' : transactionInfo.receipt_id} <br />
              Created: {transactionInfo.created_timestamp} <br />
            </p>
            <TextField
              autoFocus
              margin="dense"
              label={'Receipt_id'}
              type="text"
              name={"receiptID"}
              value={receiptID}
              onChange={(event) => {
                setReceiptID(event.target.value)
              }}
              fullWidth
              multiline
          />
            <Typography variant="h6" gutterBottom>
              Package Info
            </Typography>
            <p>
              Name.: {transactionInfo.item_description} <br />
              Value: {transactionInfo.item_value}  <br />
              Type: {transformItemType(transactionInfo.item_type)}  <br />
            </p>
            <Typography variant="h6" gutterBottom>
              Sender Info
            </Typography>
            <p>
              Name: {transactionInfo.sender.full_name} <br />
              Address: {transactionInfo.sender.province}, {transactionInfo.sender.city} {transactionInfo.sender.district}, {transactionInfo.sender.street}, 
              {transactionInfo.sender.landmarks !==  '' ? transactionInfo.sender.landmarks + ',' : ''}{transactionInfo.sender.postal_code}<br />
              Contact No.: {transactionInfo.sender.cellphone_no}  <br />
            </p>
            <Typography variant="h6" gutterBottom>
              Recipient Info
            </Typography>
            <p>
              Name: {transactionInfo.recipient.full_name} <br />
              Address: {transactionInfo.recipient.province}, {transactionInfo.recipient.city} {transactionInfo.recipient.district}, {transactionInfo.recipient.street}, 
              {transactionInfo.recipient.landmarks !==  '' ? transactionInfo.recipient.landmarks + ',' : ''} {transactionInfo.recipient.postal_code}<br />
              Contact No.: {transactionInfo.recipient.cellphone_no}  <br />
            </p>
            <Typography variant="h6" gutterBottom>
              Fees
            </Typography>
            <p>
              Shipping Fee: {transactionInfo.shipping_fee} <br />
              Shouldered by: {transactionInfo.service_fees_payor} <br />
            </p>
            <Typography variant="h6" gutterBottom>
              Other Info
            </Typography>
            <p>
              Cancellation Reason: {transactionInfo.cancellation_reason === '' || transactionInfo.cancellation_reason === null  ?  'N/A' : transactionInfo.cancellation_reason } <br />
            </p>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleDialogClose}
            color="primary">
            Close
          </Button>
          <Button 
            onClick={saveInfo}
            color="primary">
            Save info
          </Button>
        </DialogActions>
        </Dialog>     
    </Fragment>   
  );
}

InfoDialog.defaultProps = {
  btnText: 'Set Info'
}

InfoDialog.propTypes = {
  btnText: PropTypes.string,
  transaction: PropTypes.object,
  isOpen: PropTypes.bool,
}

export default InfoDialog;

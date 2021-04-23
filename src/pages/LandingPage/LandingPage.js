import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import _ from 'lodash';
import axios from 'axios';
import { ToastEmitter } from '../../components/Toast';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const [transaction, setTransaction] = useState({})
  const [transactionLogs, setTransactionLogs] = useState([])
  const [trackingID, setTrackingID] = useState('')
  const [isChecked, setIsChecked] = useState('F')
  const [errors, setErrors] = useState({})
  
  const handleSearctTransactionLogs = (id) => {
    
    axios.get(process.env.REACT_APP_WEB_API + '/deliveries/' + id.toString() + '/logs')
    .then(function (response) {
      setTransactionLogs(response.data.data.logs)
      
    })
    .catch(function (error) {
      ToastEmitter('error', 'Something went wrong')
    })
  }


  const handleSearctTransaction = () => {
    if (_.isEmpty(trackingID) === true) {
      setErrors({tracking_id: ['The field is required.']})
      return
    }
    setErrors({})

    let requestParams = {
      'tracking_id': trackingID
    }

    if (isChecked === 'T') {
      requestParams = {
        'receipt_id': trackingID
      }
    }

    axios.get(process.env.REACT_APP_WEB_API + '/deliveries' , {
      params: requestParams
    })
    .then(function (response) {
      console.log(response.data.data.deliveries)
      if (_.isEmpty(response.data.data.deliveries) === false) {
        setTransaction(response.data.data.deliveries[0])
        handleSearctTransactionLogs(response.data.data.deliveries[0].id)
      } else {
        setTransaction({})
        ToastEmitter('error', 'Trasanction Not found')
      }
      
    })
    .catch(function (error) {
      ToastEmitter('error', 'Something went wrong')
    })
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Helmet>
        <title>{ 'e-lamove' }</title>
      </Helmet>
      <h2>Tracking Page</h2>
      
      <div>
        <Link to="/home">Home</Link>
      </div>
      <TextField
        autoFocus
        margin="dense"
        label={'Tracking ID'}
        type="text"
        name={"tracking ID"}
        value={trackingID}
        onChange={(event) => {
          setTrackingID(event.currentTarget.value)
        }}
        error={errors.hasOwnProperty('tracking_id') === true}
        helperText={errors.hasOwnProperty('tracking_id') ? errors['tracking_id'][0] : '' }
      />

      <Button 
        variant="contained" 
        color="primary"
        onClick={handleSearctTransaction}  
      >
          Search
      </Button>
      
      <FormControlLabel
      control={<Checkbox 
        checked={(isChecked === 'T')}
        name="isChecked"
        onClick={() => {
          let newValues = isChecked === 'T' ? 'F' : 'T'
          setIsChecked(newValues)
        }}
      />}
      label="Search using Receipt or Waybill "
    />

      {_.isEmpty(transaction) === true ? 
        <p>No Transaction available</p> 
      :
        <div>
        <h3>Details</h3>
        <ul>
          <li>Tracking ID: {transaction.tracking_id}</li>
          <li>Receipt ID: {transaction.receipt_id}</li>
          <li>Total Amount: {transaction.total_amount}</li>
          <li>Item Name: {transaction.item_name}</li>
          <li>Booked: {transaction.created_timestamp}</li>
        </ul>
        
        <h3>Logs</h3>
        <ol>{
          transactionLogs.map((transLog, index)=> {
            return (<li key={index}>Event: {transLog.name}, Date and Time: {transLog.created_timestamp}</li>)
          })}
        </ol>

<FormControl component="fieldset" className={classes.formControl}>
<FormLabel component="legend">Status</FormLabel>
<FormGroup>

<FormControlLabel
    control={<Checkbox 
      checked={(transaction.is_for_pick_up === 'T')} 
      name="is_for_pick_up" 
      disabled
    />}
    label="For Pick up"
  />
  <FormControlLabel
    control={<Checkbox 
      checked={(transaction.is_already_pick_up === 'T')} 
      name="is_already_pick_up"
      disabled
      />}
    label="Already Pick up"
  />
  <FormControlLabel
    control={<Checkbox 
      checked={(transaction.is_in_transit === 'T')}
      name="is_in_transit"
      disabled
    />}
    label="Transit"
  />
  
  <FormControlLabel
    control={<Checkbox 
      checked={(transaction.is_delivered === 'T')}
      name="is_delivered" 
      disabled
      />}
    label="Delivered"
  />
  <FormControlLabel
    control={<Checkbox 
      checked={(transaction.is_successful === 'T')} 
      name="is_successful" 
      disabled
    />}
    label="Successful"
  />
  <FormControlLabel
    control={<Checkbox 
      checked={(transaction.is_cancelle === 'T')} 
      name="is_cancelled" 
      disabled
    />}
    label="Cancelled"
  />
</FormGroup>
      

</FormControl>
        </div>
      
      }


      
    </div>
  )
}
export default LandingPage

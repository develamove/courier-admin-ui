import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import axios from 'axios';
import { ToastEmitter } from '../../components/Toast';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  trackDeliveryImage: {
    backgroundImage: `url('../../assets/img/track-delivery-graphic.svg')`
  },
  inputSearchBar: {
    padding: '0 0 0 5px'
  },
  logoSearchBar: {
   
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  const [transaction, setTransaction] = useState({})
  const [trackingID, setTrackingID] = useState('')
  const [isChecked, setIsChecked] = useState('F')
  const [errors, setErrors] = useState({})
  
  const handleSearchTransaction = () => {
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
    axios.get(process.env.REACT_APP_WEB_API + '/deliveries/' + trackingID , {
      params: requestParams
    })
    .then(function (response) {
      if (_.isEmpty(response.data.data.delivery) === false) {
        setTransaction(response.data.data.delivery)
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
        <title>{ 'E-lamove | Tracking Page' }</title>
      </Helmet>

    <Grid container className={classes.root} direction={'column'} spacing={2} justify="center">
      <Grid item xs={12}>
      </Grid>
      <Grid item xs={12}>
      <div>
        <Link to="/home">Create new Booking</Link>
      </div>
      <h1>WHERE'S MY DELIVERY?</h1>  
        <OutlinedInput
          autoFocus
          error={errors.hasOwnProperty('tracking_id') === true}
          helpertext={errors.hasOwnProperty('tracking_id') ? errors['tracking_id'][0] : '' }
          type={'text'}
          label={'tracking filter'}
          value={trackingID}
          onChange={(event) => {
            setTrackingID(event.currentTarget.value)
          }}
          className={classes.inputSearchBar}
          endAdornment={
            <InputAdornment position="end" className={classes.logoSearchBar}>
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleSearchTransaction}
                edge="end"
                label={'tracking filter'}
              >
                 <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
          />
          <br />
           <FormControlLabel
            control={<Checkbox 
              checked={(isChecked === 'T')}
              name="isChecked"
              onClick={() => {
                let newValues = isChecked === 'T' ? 'F' : 'T'
                setIsChecked(newValues)
              }}
          />}
      label="Search by using Receipt ID (Waybill ID)"
    />
      {_.isEmpty(transaction) === true ? 
        <p>No Transaction available</p> 
      :
        <div>
          <h3>Details</h3>
          <ul>
            <li>Tracking ID: {transaction.tracking_number}</li>
            <li>Receipt ID: {(transaction.receipt_id === '') ? 'N/A' : transaction.receipt_id}</li>
            <li>Total Amount: {transaction.total}</li>
            <li>Item Name: {transaction.item_description}</li>
            <li>Booked: {transaction.created_timestamp}</li>
          </ul>
          
          <h3>Events</h3>
          <ol>{
            transaction.events.map((event, index)=> {
              return (<li key={index}>Event: {event.name}, Date and Time: {event.created_timestamp}, Remarks: {event.remarks}</li>)
            })}
          </ol>
        </div>
        }
      </Grid>
    </Grid>
    </div>
  )
}
export default LandingPage

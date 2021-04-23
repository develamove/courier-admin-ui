import React, { useState, Fragment } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import _ from 'lodash';
import axios from 'axios'
// import { Validator } from '../../utils/customValidator';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useConfirm } from 'material-ui-confirm';
import { ToastEmitter } from '../../components/Toast';
import { useAuth } from 'base-shell/lib/providers/Auth'

/**
 * For the following object keys (province, city, district) 
 * suffix _name is use for validation while the keys without suffix is the variable key for its real value
 */
const defaultInfo = {
  comments: '',
  created_timestamp: '',
  is_already_pick_up: 'F',
  is_cancelled: 'F',
  is_cod: '',
  is_delivered: 'F',
  is_for_pick_up: 'F',
  is_in_transit: 'F',
  is_provincial: 'F',
  is_remitted: 'F',
  is_successful: 'F',
  item_amount: 0,
  item_name: '',
  item_type: '',
  item_weight: 1,
  receipt_id: '',
  set_timestamp: null,
  set_user: null,
  total_amount: 0,
  tracking_id: '',

}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const TransactionDialog = (props) => {
  const auth = useAuth()
  const classes = useStyles();
  const { isOpen, getInfo, transaction } = props
  const [isDialogOpen, setDialogOpen] = useState(isOpen !== undefined ? isOpen : false)
  const [info, setInfo] = useState(transaction || defaultInfo)
  const [cachedInfo,] = useState(transaction || defaultInfo)
  // const [, setErrors] = useState({})
  const confirm = useConfirm();

  const handleInfoChange = (event) => {
    let value = event.target.value

    // All keys with prefix is_ are filtered here, values are 
    if (event.target.name.startsWith('is_') === true) {
      value = (info[event.target.name] === 'T') ? 'F' : 'T'
    }

    setInfo({ 
      ...info, 
      [event.target.name]: value
    })
  }

  // const handleCellPhoneChange = (value) => {
  //   const cpRegex = /^[0-9\b]+$/;

  //   if (value === '' || cpRegex.test(value)) {
  //     return value.slice(0, 10)
  //   }

  //   return info.cellphone_no
  // }

  const handleDialogState = (isOpen) => {
    setDialogOpen((isOpen === true) ? false : !isDialogOpen)
  }

  const handleDialogClose = () => {
    handleDialogState(true)
  }

  const manageInfo = (isClearInfo) => {
    handleDialogClose()
    if (isClearInfo === true) {
      setInfo(defaultInfo)
    } else {
      getInfo(info)
    }
  }

  // const validateAddress = () => {
  //   let addressValidationSchema = {
  //     street: [
  //       'isEmpty'
  //     ],
  //     province_name: [
  //       'isEmpty'
  //     ],
  //     city_name: [
  //       'isEmpty'
  //     ],
  //     district_name: [
  //       'isEmpty'
  //     ],
  //     full_name: [
  //       'isEmpty'
  //     ],
  //     cellphone_no: [
  //       'isEmpty'
  //     ]
  //   }

  //   let validator = new Validator()
  //   validator.validate(addressValidationSchema, info)

  //   let adddressErrors = validator.getErrors()

  //   if (_.isEmpty(adddressErrors) === false) {
  //     setErrors(adddressErrors)
  //     return true
  //   }

  //   return true
  // }

  const getDifference = (obj1, obj2) => {
    let diffs = {}
    let allowedKeys = ['is_for_pick_up', 'is_already_pick_up', 'is_in_transit', 'is_delivered', 'is_successful', 'is_remitted', 'comments', 'receipt_id', 'client_id']
    Object.keys(obj1).forEach(key => {
       if(obj1[key] !== obj2[key]){
        diffs[key] = obj2[key]
       }
    });

    return _.pick(diffs, allowedKeys);
 }

  const requestForUpdate = (data) => {
    
    axios.put(process.env.REACT_APP_WEB_API + '/deliveries/' + data['id'].toString(), data)
    .then(function (response) {
      console.log(response)
      ToastEmitter('success', 'Transaction are now updated')
    })
    .catch(function (error) {
      ToastEmitter('error', 'Something went wrong')
    })
  }

  const updateTransaction = () => {
    confirm({ description: 'This action is permanent!' })
      .then(() => { 
        let infoForUpdate = getDifference(cachedInfo, info)
        infoForUpdate['id'] = info['id']
        console.log(auth)
        infoForUpdate['client_id'] = auth.auth.client_id
        infoForUpdate['retry'] = 1
        requestForUpdate(infoForUpdate)
      })
      .catch(() => { /* ... */ });
  }

  return (
    <Fragment>
      <Dialog open={isDialogOpen} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle>Trasactions Details</DialogTitle>

        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            label={'Tracking ID'}
            type="text"
            name={"tracking_id"}
            value={info.tracking_id}
            fullWidth
            disabled
          />

        <TextField
            autoFocus
            margin="dense"
            label={'Receipt ID'}
            type="text"
            name={"receipt_id"}
            value={(info.receipt_id === '') ? '' : info.receipt_id}
            onChange={handleInfoChange}
            fullWidth
            placeholder='N/A'
          />

          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Status</FormLabel>
            <FormGroup>

            <FormControlLabel
                control={<Checkbox 
                  checked={(info.is_for_pick_up === 'T')} 
                  name="is_for_pick_up" 
                  onChange={handleInfoChange} 
                />}
                label="For Pick up"
              />
              <FormControlLabel
                control={<Checkbox 
                  checked={(info.is_already_pick_up === 'T')} 
                  name="is_already_pick_up" 
                  onChange={handleInfoChange} 
                  />}
                label="Already Pick up"
              />
              <FormControlLabel
                control={<Checkbox 
                  checked={(info.is_in_transit === 'T')}
                  name="is_in_transit" 
                  onChange={handleInfoChange} 
                />}
                label="Transit"
              />
              
              <FormControlLabel
                control={<Checkbox 
                  checked={(info.is_delivered === 'T')}
                  name="is_delivered" 
                  onChange={handleInfoChange}
                  />}
                label="Delivered"
              />
            </FormGroup>
        </FormControl>

          <TextField
            margin="dense"
            label={'Item Name'}
            type="text"
            name={"item_name"}
            value={info.item_name}
            fullWidth
            disabled
          />

          <TextField
            margin="dense"
            label={'Item Type'}
            type="text"
            name={"item_type"}
            value={info.item_type}
            fullWidth
            disabled
          />

        <TextField
            margin="dense"
            label={'Item Amount'}
            type="text"
            name={"item_amount"}
            value={info.item_amount}
            fullWidth
            disabled
          />

        <FormControlLabel
          control={
            <Checkbox
              checked={Boolean(info.is_cod === 'T')}
              disabled
              name="checkedF"
            />
          }
          label="Cash on Delivery"
        />

          <TextField
            margin="dense"
            label={'Total Amount'}
            type="text"
            name={"total_amount"}
            value={info.total_amount}
            fullWidth
            disabled
          />

        <TextField
            margin="dense"
            label={'Created Timestamp'}
            type="text"
            name={"created_timestamp"}
            value={info.created_timestamp}
            fullWidth
            disabled
          />

        <FormControlLabel
          control={
            <Checkbox
              checked={Boolean(info.is_cancel === 'T')}
              disabled
              name="checkedF"
            />
          }
          label="Cancel Trasaction"
        />

      <FormControlLabel
          control={
            <Checkbox
              checked={Boolean(info.is_successful === 'T')}
              name="is_successful"
              onChange={handleInfoChange}
            />
          }
          label="Success"
        />

      <FormControlLabel
          control={
            <Checkbox
              checked={Boolean(info.is_remitted === 'T')}
              name="is_remitted"
              onChange={handleInfoChange}
            />
          }
          label="Remitted"
        />

          <TextField
            margin="dense"
            label={'Comment'}
            type="text"
            name={"comments"}
            value={info.comments}
            onChange={handleInfoChange}
            rows={5}
            fullWidth
            multiline
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { manageInfo(true) }} color="primary">
            Cancel
          </Button>
          <Button 
            onClick={updateTransaction}
            color="primary">
            Update
          </Button>
        </DialogActions>
        </Dialog>     
    </Fragment>   
  );
}

TransactionDialog.defaultProps = {
  btnText: 'Set Info'
}

TransactionDialog.propTypes = {
  btnText: PropTypes.string,
  transaction: PropTypes.object,
  isOpen: PropTypes.bool,
}

export default TransactionDialog;

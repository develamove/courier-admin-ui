import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import NativeSelect from '@material-ui/core/NativeSelect';
import React, { useState, Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import axios from 'axios'
import moment from 'moment';
import { useAuth } from 'base-shell/lib/providers/Auth'
import { ToastEmitter } from '../../components/Toast';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   formControl: {
//     margin: theme.spacing(3),
//   },
// }));

const CANCELLED_REASONS = [
  {
    name: 'Item/s not ready',
    value: 'Item/s not ready',
  },
  {
    name: 'Item/s out of stock.',
    value: 'Item/s out of stock.',
  },
  {
    name: 'Out of town or not around.',
    value: 'Out of town or not around.',
  },
  {
    name: 'Entered wrong pick-up address.',
    value: 'Entered wrong pick-up address.',
  },
  {
    name: 'Buyer requested to cancel transaction.',
    value: 'Buyer requested to cancel transaction.',
  },
  {
    name: 'Buyer provided incorrect details.',
    value: 'Buyer provided incorrect details.',
  },
  {
    name: 'Incorrect Cash-on-Delivery (COD) amount.',
    value: 'Incorrect Cash-on-Delivery (COD) amount.',
  }
]

const FAILED_REASONS = [
  {
    name: 'Item/s not ready.',
    value: 'Item/s not ready.',
  },
  {
    name: 'Item/s out of stock.',
    value: 'Item/s out of stock.',
  },
  {
    name: 'Out of town or not around.',
    value: 'Out of town or not around.',
  },
  {
    name: 'Entered wrong pick-up address.',
    value: 'Entered wrong pick-up address.',
  },
  {
    name: 'Buyer requested to cancel transaction.',
    value: 'Buyer requested to cancel transaction.',
  },
  {
    name: 'Buyer provided incorrect details.',
    value: 'Buyer provided incorrect details.',
  },
  {
    name: 'Incorrect Cash-on-Delivery (COD) amount.',
    value: 'Incorrect Cash-on-Delivery (COD) amount.',
  }
]

const EVENTS = [
  {
    name: 'Cancelled',
    value: 'cancelled'
  },
  {
    name: 'Delivered',
    value: 'delivered'
  },
  {
    name: 'In Transit',
    value: 'in_transit'
  },
  {
    name: 'Failed',
    value: 'failed'
  },
  {
    name: 'Picked up',
    value: 'picked_up'
  },
  {
    name: 'Remitted',
    value: 'remitted'
  }
]

const EventDialog = (props) => {
  const auth = useAuth()
  const [remarks, setRemarks] = useState('Item/s not ready')
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState('0')
  const { isOpen, transaction, handleClose } = props
  const [isDialogOpen, setDialogOpen] = useState(isOpen !== undefined ? isOpen : false)

  const handleDialogState = (isOpen) => {
    setDialogOpen((isOpen === true) ? false : !isDialogOpen)
  }

  const handleDialogClose = () => {
    handleDialogState(true)
    handleClose('event')
  }

  const saveEvents = () => {
    if (_.isEmpty(events) === true) {
      handleDialogClose()
      return
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.auth.token}`,
    }

    axios.post(process.env.REACT_APP_WEB_API + '/deliveries/' + transaction['id'].toString() + '/events', {
      events: events
    }, {
      headers: headers
    })
    .then(function (response) {
      if (_.isEmpty(response.data.errors) === false) {
        ToastEmitter('error', 'Failed to add events!')
      } else {
        ToastEmitter('success', 'Events added!')
      }
      handleDialogClose()
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

  // const modifyEvent = (index) => {
  //   let newEvents = [...events]
  //   setEvents(newEvents)
  // }

  const removeEvent = (index) => {
    let newEvents = [...events]
    newEvents.splice(index, 1)
    setEvents(newEvents)
  }

  const addEvent = () => {
    let newEvents = [...events]
    newEvents.push({
      name: EVENTS[selectedEvent].value,
      remarks: remarks
    })
    setEvents(newEvents)
  }

  const formatText = text => {
    let newText = text.replace('_', ' ')

    return _.capitalize(newText)
  }

  const formatDate = date => {
    console.log(date)
    return moment(date).format('MMMM DD, YYYY H:mm:ss');
  }

  return (
    <Fragment>
      <Dialog open={isDialogOpen} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle>Events</DialogTitle>

        <DialogContent>
          <Typography variant="h6" gutterBottom>
            Existing Events
          </Typography>
          <ul>
            <li>[{formatDate(transaction.created_timestamp)}]: Created</li>
            {
              transaction.events.map((event, index) => {
                return (
                  <li key={index}>[{formatDate(event.created_timestamp)}]: {formatText(event.name)}: {event.remarks}</li>
                )
              })
            }
          </ul>

          <Typography variant="h6" gutterBottom>
            New Events
          </Typography>
          <ul>
            {
              events.map((event, index) => {
                return (
                  <li key={index}>{event.name}, {event.remarks}
                   {/* <IconButton 
                      aria-label="delete" 
                      key={index}
                      onClick={() => {
                        modifyEvent(index)
                      }}
                    >
                    <EditIcon fontSize="small" />
                  </IconButton> */}
                  <IconButton 
                      aria-label="delete" 
                      key={index}
                      onClick={() => {
                        removeEvent(index)
                      }}
                    >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                  </li>
                )
              })
            }
          </ul>


          <FormControl
            fullWidth
          >
            <InputLabel htmlFor="uncontrolled-native">Events</InputLabel>
            <NativeSelect
              defaultValue={0}
              inputProps={{
                name: 'availableEvents',
                id: 'available-events',
              }}
              onChange={(event) => {
                let eventIndex = event.currentTarget.value
                setSelectedEvent(eventIndex)
                if (eventIndex === '0') {
                  setRemarks(CANCELLED_REASONS[eventIndex].value)
                } else if (eventIndex === '3') {
                  setRemarks(FAILED_REASONS[eventIndex].value)
                } else {
                  setRemarks('')
                }
              }}
            >
              {
                EVENTS.map((event, index) => {
                  return (
                    <option key={index} value={index}>{event.name}</option>
                  )
                })
              }
            </NativeSelect>
          </FormControl>
          
          <br /><br />
          { (selectedEvent === '0' || selectedEvent === '3') ?
            <FormControl
              fullWidth
            >
            <InputLabel htmlFor="uncontrolled-native">Reasons</InputLabel>
            <NativeSelect
              defaultValue={0}
              inputProps={{
                name: 'fixedRemarks',
                id: 'fixed-remarks',
              }}
              onChange={(event) => {
                if (selectedEvent === '0') {
                  setRemarks(CANCELLED_REASONS[event.currentTarget.value].value)
                } else {
                  setRemarks(FAILED_REASONS[event.currentTarget.value].value)
                }
              }}
            >
              {
                (selectedEvent === '0' ? CANCELLED_REASONS : FAILED_REASONS).map((event, index) => {
                  return (
                    <option key={index} value={index}>{event.name}</option>
                  )
                })
              }
            </NativeSelect>
          </FormControl>
          :  
          <FormControl
              fullWidth
            >
              <TextField
                autoFocus
                margin="dense"
                label={'Remarks'}
                type="text"
                name={"remakrs"}
                value={remarks}
                onChange={(event) => {
                  setRemarks(event.target.value)
                }}
                multiline
              />
            </FormControl>
        }
        </DialogContent>

        <Button 
            onClick={addEvent}
            color="primary">
            Add Event
          </Button>

        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
          <Button 
            onClick={saveEvents}
            color="primary">
            Save Events
          </Button>
        </DialogActions>
        </Dialog>     
    </Fragment>   
  );
}

EventDialog.defaultProps = {
  btnText: 'Set Info'
}

EventDialog.propTypes = {
  btnText: PropTypes.string,
  transaction: PropTypes.object,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func
}

export default EventDialog;

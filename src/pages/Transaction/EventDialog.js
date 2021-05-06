import React, { useState, Fragment } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';
import _ from 'lodash';
import axios from 'axios'
import { useAuth } from 'base-shell/lib/providers/Auth'
import { ToastEmitter } from '../../components/Toast';
import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   formControl: {
//     margin: theme.spacing(3),
//   },
// }));

const EVENTS = [
  {
    name: '',
    value: ''
  },
  {
    name: 'Picked up',
    value: 'picked_up'
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
    name: 'Delivered',
    value: 'delivered'
  },
  {
    name: 'Cancelled',
    value: 'cancelled'
  },
  {
    name: 'Remitted',
    value: 'remitted'
  }
]

const EventDialog = (props) => {
  const auth = useAuth()
  const [remarks, setRemarks] = useState('')
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState( {
    name: 'Picked up',
    value: 'pick_up'
  })

  // const classes = useStyles();
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
    console.log(transaction, events)

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
      name: selectedEvent.value,
      remarks: remarks
    })
    setEvents(newEvents)
  }

  return (
    <Fragment>
      <Dialog open={isDialogOpen} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle>Transaction Events</DialogTitle>

        <DialogContent>
          <Typography variant="h6" gutterBottom>
            List of Existing Events
          </Typography>
          <ul>
            <li>Created at, {transaction.created_timestamp}</li>
            {
              transaction.events.map((event, index) => {
                return (
                  <li key={index}>{event.name}, {event.remarks}, {event.created_timestamp}</li>
                )
              })
            }
          </ul>

          <Typography variant="h6" gutterBottom>
            List of New Events
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

          <Autocomplete
            options={EVENTS}
            getOptionLabel={(option) => option.name}
            getOptionSelected={(option, value) => option.name === value.name }
            clearOnEscape
            name={'province'}
            value={selectedEvent}
            onChange={(event, newValue) => { 
              setSelectedEvent(newValue)
            }}
            renderInput={(params) => <TextField 
                  {...params} 
                  value={selectedEvent} 
                  label="Event" 
                  margin="normal" 
                />}
          />

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
            fullWidth
            multiline
          />
        </DialogContent>

        <Button 
            onClick={addEvent}
            color="primary">
            Add Event
          </Button>

        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Exit
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

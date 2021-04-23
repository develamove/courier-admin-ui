import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button'
import Page from 'material-ui-shell/lib/containers/Page'
import Paper from '@material-ui/core/Paper'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { clientAPI } from '../../services/api/clients'
import _ from 'lodash'
import { Validator } from '../../utils/customValidator';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(620 + theme.spacing(6))]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
  avatar: {
    margin: theme.spacing(1),
    width: 192,
    height: 192,
    color: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: `100%`,
  },
}))

const SignUp = () => {
  const classes = useStyles()
  const intl = useIntl()
  const history = useHistory()
  const [apiErrors, setApiErrors] = useState({})
  const [errors, setErrors] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  // const { toggleThis } = useMenu()
  // const { setAuth } = useAuth()

  async function handleSubmit(event) {
    event.preventDefault()
    let info = {
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName,
      username: username,
      password: password,
      email: userEmail,
    }

    let infoCopy = {
      ...info, 
      confirmPassword: confirmPassword
    }

    let isValidInfo = validateInformation(infoCopy)

    if (isValidInfo === false) {
      return
    } 

    if (password !== confirmPassword) {
      setErrors({
        password: [],
        confirmPassword: []
      })
      setApiErrors(['Password and Confirm password are not matched!'])
      return 
    }


    let response = await clientAPI.createClient(info)
    if (_.isEmpty(response.errors) === false) {
      let errorMesssages = []
      let errorKeys = {}
      for (const [key, value] of Object.entries(response.errors)) {
        errorKeys[key] = []
        if (key === 'email' && value[0] === 'value does not match regex \'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\'') {
          errorMesssages.push('Email is not valid')
        } else {
          errorMesssages.push(key + ': ' + value[0])
        }
      }
      setErrors(errorKeys)
      setApiErrors(errorMesssages)
    } else {
      history.push('/signin')
    }
  }

  const validateInformation = (info) => {
    let informationSchema = {
      first_name: [
        'isEmpty'
      ],
      last_name: [
        'isEmpty'
      ],
      username: [
        'isEmpty'
      ],
      password: [
        'isEmpty'
      ],
      email: [
        'isEmpty'
      ],
      confirmPassword: [
        'isEmpty'
      ]
    }

    let validator = new Validator()
    validator.validate(informationSchema, info)

    let infoErrors = validator.getErrors()
    setErrors(infoErrors)
    console.log(infoErrors)
    return _.isEmpty(infoErrors)
  }

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: 'sign_up',
        defaultMessage: ' Sign up',
      })}
      onBackClick={() => {
        history.goBack()
      }}
    >
      <Paper className={classes.paper} elevation={6}>
        <div className={classes.container}>
          <Typography component="h1" variant="h5">
            {intl.formatMessage({ id: 'sign_up', defaultMessage: 'Sign up' })}
          </Typography>
          { _.isEmpty(apiErrors) === false &&
            apiErrors.map((value, key) => {
              return <div key={key}><Alert severity="error">{value}</Alert><br></br></div>
            }) 
          }
          
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              autoFocus
              error={errors.hasOwnProperty('username') === true}
              value={username}
              onInput={(e) => setUsername(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label={intl.formatMessage({
                id: 'username',
                defaultMessage: 'Username',
              })}
              name="username"
              autoComplete="username"
            />
            <TextField
              error={errors.hasOwnProperty('first_name') === true}
              value={firstName}
              onInput={(e) => setFirstName(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="first_name"
              label={'First Name'}
              name="firstName"
              autoComplete="firstname"
            />
            <TextField
              error={errors.hasOwnProperty('middle_name') === true}
              value={middleName}
              onInput={(e) => setMiddleName(e.target.value)}
              variant="outlined"
              margin="normal"
              fullWidth
              id="middle_name"
              label={'Middle Name'}
              name="middleName"
              autoComplete="middle_name"
            />
            <TextField
              error={errors.hasOwnProperty('last_name') === true}
              value={lastName}
              onInput={(e) => setLastName(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="last_name"
              label={'Last Name'}
              name="lastName"
              autoComplete="last_name"
            />
            {/* <TextField
              value={''}
              onInput={() => {}}
              variant="outlined"
              margin="normal"
              fullWidth
              id="street"
              label={'Street'}
              name="street"
              autoComplete="street"
              autoFocus
            />
            <TextField
              value={''}
              onInput={() => {}}
              variant="outlined"
              margin="normal"
              fullWidth
              id="province"
              label={'Province'}
              name="province"
              autoComplete="province"
              autoFocus
            />
            <TextField
              value={''}
              onInput={() => {}}
              variant="outlined"
              margin="normal"
              fullWidth
              id="city"
              label={'City'}
              name="City"
              autoComplete="city"
              autoFocus
            />
            <TextField
              value={''}
              onInput={() => {}}
              variant="outlined"
              margin="normal"
              fullWidth
              id="district"
              label={'District'}
              name="district"
              autoComplete="district"
              autoFocus
            />
            <TextField
              value={''}
              onInput={() => {}}
              variant="outlined"
              margin="normal"
              fullWidth
              id="landmarks"
              label={'Landmarks'}
              name="landmarks"
              autoComplete="landmarks"
              autoFocus
            /> */}
            <TextField
              error={errors.hasOwnProperty('email') === true}
              value={userEmail}
              onInput={(e) => setUserEmail(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={intl.formatMessage({
                id: 'email',
                defaultMessage: 'E-Mail',
              })}
              name="email"
              autoComplete="email"
            />
            <TextField
              error={errors.hasOwnProperty('password') === true}
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={intl.formatMessage({
                id: 'password',
                defaultMessage: 'Password',
              })}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              error={errors.hasOwnProperty('confirmPassword') === true}
              value={confirmPassword}
              onInput={(e) => setConfirmPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password_confirm"
              label={intl.formatMessage({
                id: 'password_confirm',
                defaultMessage: 'Confirm Password',
              })}
              type="password"
              id="password_confirm"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {intl.formatMessage({ id: 'sign_up', defaultMessage: 'Sign up' })}
            </Button>
          </form>
        </div>
      </Paper>
    </Page>
  )
}

export default SignUp

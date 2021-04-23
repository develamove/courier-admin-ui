import React, { useState, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Validator } from '../../utils/customValidator';
import { locationsAPI } from '../../services/api/locations';
import { provincesWithoutPickUpLocation, provincesWithPickUpLocation } from '../../utils/data';

/**
 * For the following object keys (province, city, district) 
 * suffix _name is use for validation while the keys without suffix is the variable key for its real value
 */
const defaultInfo = {
  street: '',
  province: {},
  city: {},
  district: {},
  province_name: '',
  city_name: '',
  district_name: '',
  landmarks: '',
  full_name: '',
  cellphone_no: ''
}

const defaultAutoCompleteOption = {
  id: 0,
  name: ''
}

const defaultProvincesProps = {
  sender: {
    options: [{id: 0, name: ''}, ...provincesWithPickUpLocation],
    getOptionLabel: (option) => option.name,
  },
  recipient: {
    options: [{id: 0, name: ''}, ...provincesWithoutPickUpLocation],
    getOptionLabel: (option) => option.name,
  }
}

const AddressDialog = (props) => {

  const { btnText, isOpen, getInfo, type, defaults, cachedLocations } = props
  const [isDialogOpen, setDialogOpen] = useState(isOpen || false)
  const [info, setInfo] = useState(defaults || defaultInfo)
  const [errors, setErrors] = useState({})
  const [cities, setCities] = useState(cachedLocations.cities || {
    cached: {},
    selected: [{id: 0, name: ''}],
  })
  const [districts, setDistricts] = useState(cachedLocations.districts || {
    cached: {},
    selected: [{id: 0, name: ''}],
  })

  const handleInfoChange = (event) => {
    let value = event.target.value

    if (event.target.name === 'cellphone_no') {
      value = handleCellPhoneChange(value)
    }

    setInfo({ 
      ...info, 
      [event.target.name]: value
    })
  }

  const handleCellPhoneChange = (value) => {
    const cpRegex = /^[0-9\b]+$/;

    if (value === '' || cpRegex.test(value)) {
      return value.slice(0, 10)
    }

    return info.cellphone_no
  }

  const handleDialogState = (isOpen) => {
    setDialogOpen((isOpen === true) ? false : !isDialogOpen)
  }

  const handleDialogClose = () => {
    handleDialogState(true)
  }

  const manageInfo = (isClearInfo) => {
    handleDialogClose()
    // if (isClearInfo === true) {
    //   setInfo(defaultInfo)
    // } else {
    //   getInfo(info)
    // }
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleProvinceChange = async (province) => {
    if (province === null) {
      return;
    }

    let citiesCopy = { ...cities }
    let cityKey = province.id.toString()

    if (cityKey in citiesCopy.cached) {  
      citiesCopy['selected'] = citiesCopy.cached[cityKey]
      setCities(citiesCopy)
      return;
    }

    let response = await locationsAPI.getAvailableCities({
      province_id: province.id
    })

    if (_.isEmpty(response.errors) === true) {
      let citiesOptions = [defaultAutoCompleteOption]
      citiesCopy.cached[cityKey] = citiesOptions.concat(response.data.cities)
      citiesCopy.selected = citiesOptions.concat(response.data.cities)
      setCities(citiesCopy)
    }
  }

  const handleCityChange = async (city) => {
    if (city === null) {
      return;
    }

    let districtsCopy = { ...districts }
    let districtKey = city.id.toString()

    if (districtKey in districtsCopy.cached) {  
      districtsCopy['selected'] = districtsCopy.cached[districtKey]
      setDistricts(districtsCopy)
      return;
    }

    let response = await locationsAPI.getAvailableDistrict({
      city_id: city.id
    })

    if (_.isEmpty(response.errors) === true) {
      let districtOptions = [defaultAutoCompleteOption]
      districtsCopy.cached[districtKey] = districtOptions.concat(response.data.districts)
      districtsCopy.selected = districtOptions.concat(response.data.districts)
      setDistricts(districtsCopy)
    }
  }

  const validateAddress = () => {
    let addressValidationSchema = {
      street: [
        'isEmpty'
      ],
      province_name: [
        'isEmpty'
      ],
      city_name: [
        'isEmpty'
      ],
      district_name: [
        'isEmpty'
      ],
      full_name: [
        'isEmpty'
      ],
      cellphone_no: [
        'isEmpty'
      ]
    }

    let validator = new Validator()
    validator.validate(addressValidationSchema, info)

    let adddressErrors = validator.getErrors()
    setErrors(adddressErrors)
    
    return _.isEmpty(adddressErrors)
  }

  const saveAdress = () => {
    let isValidAddress = validateAddress()
    
    if (isValidAddress === true) {
      getInfo({
        info: info,
        cachedLocations: {
          cities: cities,
          districts: districts
        } 
      })
      setDialogOpen(false)
      return
    }
  }

  return (
    <Fragment>
      <Button 
        variant="contained" 
        color="primary"
        onClick={handleDialogState}  
      >
          {btnText}
      </Button>
    
      <Dialog open={isDialogOpen} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle>{capitalizeFirstLetter(type)} Details</DialogTitle>

        
        <DialogContent>
          <DialogContentText>
            {'Please enter the neccessary information'}
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            label={capitalizeFirstLetter(type) + '\'s Street'}
            type="text"
            name={"street"}
            value={info.street}
            onChange={handleInfoChange}
            fullWidth
            error={errors.hasOwnProperty('street') === true}
            helperText={errors.hasOwnProperty('street') ? errors['street'][0] : '' }
          />

          <Autocomplete
            {...defaultProvincesProps[type]}
            getOptionSelected={(option, value) => option.name === value.name }
            clearOnEscape
            name={'province'}
            value={info.province}
            onChange={(event, newValue) => {
              if (newValue !== null) {
                handleProvinceChange(newValue)
              }

              let value = ''
              if (newValue === null) {
                value = ''
              } else if ('name' in newValue) {
                value = newValue.name
              }
            
              setInfo({
                ...info,
                city_name: '',
                city: {id:0, name: ''},
                province_name: value,
                district_name: '',
                district: {id:0, name: ''},
                province: newValue
              })
            }}
            renderInput={(params) => <TextField 
                  {...params} 
                  value={info.province} 
                  label="Province" 
                  margin="normal" 
                  error={errors.hasOwnProperty('province_name') === true}
                  helperText={errors.hasOwnProperty('province_name') ? errors['province_name'][0] : '' }  
                />}
          />
  
          <Autocomplete
            options={cities.selected}
            getOptionLabel={(option) => option.name}
            getOptionSelected={(option, value) => option.name === value.name }
            clearOnEscape
            name={'city'}
            value={info.city}
            onChange={(event, newValue) => {
              if (newValue !== null) {
                handleCityChange(newValue)
              }
              
              let value = ''

              if (newValue === null) {
                value = ''
              } else if ('name' in newValue) {
                value = newValue.name
              }

              setInfo({
                ...info,
                district_name: '',
                district: {id:0, name: ''},
                city_name: value,
                city: newValue
              })
            }}
            renderInput={(params) => <TextField 
                  {...params}
                  label="City" 
                  margin="normal" 
                  error={errors.hasOwnProperty('city_name') === true}
                  helperText={errors.hasOwnProperty('city_name') ? errors['city_name'][0] : '' }
                />}
          />

          <Autocomplete
             options={districts.selected}
             getOptionLabel={(option) => option.name}
             getOptionSelected={(option, value) => option.name === value.name}
             clearOnEscape
             name={'district'}
             value={info.district}
             onChange={(event, newValue) => {
                let value = ''
                if (newValue === null) {
                  value = ''
                } else if ('name' in newValue) {
                  value = newValue.name
                }

               setInfo({
                 ...info,
                 district_name: value,
                 district: newValue
               })
             }}
            renderInput={(params) => <TextField 
                  {...params} 
                  label="District" 
                  margin="normal" 
                  error={errors.hasOwnProperty('district_name') === true}
                  helperText={errors.hasOwnProperty('district_name') ? errors['district_name'][0] : '' }
                />}
           />

          <TextField
            margin="dense"
            name={"landmarks"}
            value={info.landmarks}
            onChange={handleInfoChange}
            label="Other location"
            type="text"
            fullWidth
          />

          <TextField
            margin="dense"
            label={capitalizeFirstLetter(type) + '\'s Full Name'}
            type="text"
            name={'full_name'}
            value={info.full_name}
            onChange={handleInfoChange}
            fullWidth
            error={errors.hasOwnProperty('full_name') === true}
            helperText={errors.hasOwnProperty('full_name') ? errors['full_name'][0] : '' }
          />

          <TextField
            margin="dense"
            label={capitalizeFirstLetter(type) + '\'s Mobile Number'}
            type="text"
            name={'cellphone_no'}
            value={info.cellphone_no}
            onChange={handleInfoChange}
            fullWidth
            error={errors.hasOwnProperty('cellphone_no') === true}
            helperText={errors.hasOwnProperty('cellphone_no') ? errors['cellphone_no'][0] : '' }
            InputProps={{
              startAdornment: <InputAdornment position="start">+63</InputAdornment>,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { manageInfo(true) }} color="primary">
            Cancel
          </Button>
          <Button 
            onClick={(event) => {
              saveAdress()
             }
            } color="primary">
            Use Address
          </Button>
        </DialogActions>
        </Dialog>     
    </Fragment>   
  );
}

AddressDialog.defaultProps = {
  btnText: 'Set Info'
}

AddressDialog.propTypes = {
  btnText: PropTypes.string,
  defaults: PropTypes.object,
  isOpen: PropTypes.bool,
  type: PropTypes.string.isRequired,
  getInfo: PropTypes.func.isRequired
}

export default AddressDialog;

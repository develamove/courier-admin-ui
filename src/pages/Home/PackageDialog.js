import React, { useState, Fragment } from 'react'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import GridList from '@material-ui/core/GridList';
import PropTypes from 'prop-types';
import Package from './Package'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import { Validator } from '../../utils/customValidator';
import { makeStyles } from '@material-ui/core/styles';
import { GridListTile } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const packageTypes = [
  {
    name: 'Small',
    item_type: 'S',
    item_code: 's',
    rate: 100,
    weight: 'Max weight: 3 kg',
    size: '23.7cm x 39.8cm',
    description: ''
  },
  {
    name: 'Medium',
    item_type: 'M',
    item_code: 'm',
    rate: 150,
    weight: 'Max weight: 3 kg',
    size: '28.8cm x 44.7cm',
    description: ''
  },
  {
    name: 'Large',
    item_type: 'L',
    item_code: 'l',
    rate: 180,
    weight: 'Max weight: 3 kg',
    size: '30cm x 50.5cm',
    description: ''
  },
  {
    name: 'Box',
    item_type: 'B',
    item_code: 'b',
    rate: 220,
    weight: 'Max weight: 3 kg',
    size: '30cm x 50.5cm',
    description: ''
  },
]

const PackageDialog = (props) => {
  const { btnText, isOpen, getPackageInfo, defaults } = props
  const classes = useStyles();
  const [packageName, setPackageName] = useState(defaults.item_name && '')
  const [selectedPackage, setSelectedPackage] = useState(['s', 'm', 'l', 'b'].indexOf(defaults.package.item_code) && 0)
  const [errors, setErrors] = useState({})
  const [isCOD, setIsCOD] = useState(defaults.isCOD && 'F')
  const [isDialogOpen, setDialogOpen] = useState(isOpen || false)

  const handleDialogState = (isOpen) => {
    setDialogOpen((isOpen === true) ? false : !isDialogOpen)
  }

  const handleDialogClose = () => {
    handleDialogState(true)
  }

  const validatePackageInfo = () => {
    let pakcageValidationSchema = {
      packageName: [
        'isEmpty'
      ],
    }

    let validator = new Validator()
    validator.validate(pakcageValidationSchema, {
      packageName: packageName
    })

    let packageErrors = validator.getErrors()
    setErrors(packageErrors)

    return _.isEmpty(packageErrors)
  }

  const savePackageInfo = () => {
    let isValidPackage = validatePackageInfo()

    if (isValidPackage === true) {
      handleDialogClose()
      getPackageInfo({
        item_name: packageName,
        is_cod: isCOD,
        package: packageTypes[selectedPackage]
      })
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
        <DialogTitle>Package Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label={'Package Name'}
            type="text"
            name={"packageName"}
            value={packageName}
            onChange={(event) => {
              setPackageName(event.target.value)
            }}
            fullWidth
            error={errors.hasOwnProperty('packageName') === true}
            helperText={errors.hasOwnProperty('packageName') ? errors['packageName'][0] : '' }
          />

          <br />
          <Typography gutterBottom variant="h6" component="h3">
            {'Package Size'}
          </Typography>
          <GridList className={classes.gridList} cols={2.5} spacing={8} cellHeight={'auto'}>
            {packageTypes.map((packageType, index) => (
              <GridListTile key={index}
                onClick={() => {
                  setSelectedPackage(index)
                }}
              >
                <Package
                  packageInfo={packageType}
                  isSelected={selectedPackage === index}
                />
              </GridListTile>
            ))}
          </GridList>

          <FormControlLabel
            control={
              <Checkbox
                onChange={() => {
                  let value = isCOD === 'T' ? 'F' : 'T'
                  setIsCOD(value)
                }}
                name="checkedF"
              />
          }
          label="Cash on Delivery"
        />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={savePackageInfo} color="primary">
            Save Item Details
          </Button>
        </DialogActions>
        </Dialog>     
    </Fragment>   
  );
}

PackageDialog.defaultProps = {
  btnText: 'Set Package',
  isOpen: false
}

PackageDialog.propTypes = {
  getPackageInfo: PropTypes.func.isRequired,
  btnText: PropTypes.string,
  isOpen: PropTypes.bool,
}

export default PackageDialog;

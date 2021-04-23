import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
// import { Validator } from '../../utils/customValidator';

const Package = (props) => {
  const { packageInfo, isSelected } = props

  return (
    <Fragment>
      <Card>
        
      <CardActionArea>
        <CardHeader

          avatar={
            <Avatar aria-label="recipe">
              {packageInfo.item_type.toUpperCase()}
            </Avatar>
          }
          action={(isSelected === true) ? <CheckCircleRoundedIcon /> : null}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {packageInfo.name}
          </Typography>
          <Typography color="textSecondary" align={'center'} component="p">
            {packageInfo.weight}
          </Typography>
          <Typography color="textSecondary" align={'center'} component="p">
            {packageInfo.size}
          </Typography>
          <Typography color="textSecondary" align={'center'} component="p">
            {packageInfo.rate}
          </Typography>
          <Typography color="textSecondary" align={'center'} component="p">
            Rate
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>   
    </Fragment>   
  );
}

Package.defaultProps = {
  packageInfo: {
    
  },
  isSelected: false,
}

Package.propTypes = {
  packageInfo: PropTypes.object,
  isSelected: PropTypes.bool,
}

export default Package;

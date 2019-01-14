import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Contact extends React.Component {
  state = {
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
      <Grid direction="row" justify="center" container spacing={40}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Contact</Paper>
        </Grid>
      </Grid>
      </div>
    )};

}


Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles({ withTheme: true })(Contact);

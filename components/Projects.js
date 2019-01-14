import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Projects extends React.Component {
  state = {
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
      <Grid direction="row" justify="center" container spacing={40}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Projects</Paper>
        </Grid>
      </Grid>
      </div>
    )};

}


Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles({ withTheme: true })(Projects);

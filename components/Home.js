import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



class Home extends React.Component {
  state = {
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <style jsx>{`
          video#bgvid {
              position: fixed;
              top: 50%;
              left: 50%;
              min-width: 100%;
              min-height: 100%;
              width: auto;
              height: auto;
              z-index: -100;
              -ms-transform: translateX(-50%) translateY(-50%);
              -moz-transform: translateX(-50%) translateY(-50%);
              -webkit-transform: translateX(-50%) translateY(-50%);
              transform: translateX(-50%) translateY(-50%);
              background: url(polina.jpg) no-repeat;
              background-size: cover;
          }
        `}</style>
        <Grid direction="row" justify="center" container spacing={0}>
            <Grid style={{opacity: '0.75',background: 'black',minHeight:'40rem',minWidth:'100%',color: 'white'}} item xs={12}>
              <video playsInline autoPlay muted loop src="/static/videos/kumbh.mp4" poster="polina.jpg" id="bgvid"/>
              <h1 style={{marginTop: '0px'}}>Suchint Mandloi</h1>
            </Grid>
          </Grid>
          <Grid direction="row" justify="center" container spacing={0}>
              <Grid item xs={12}>
                <h1> test</h1>
              </Grid>
            </Grid>
      </div>
    )};

}


Home.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles({ withTheme: true })(Home);

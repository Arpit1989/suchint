import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import BusinessIcon from '@material-ui/icons/Business';
import PeopleIcon from '@material-ui/icons/People';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import MovieIcon from '@material-ui/icons/Movie';
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';

import AboutMe from './AboutMe';
import Advertisement from './Advertisement';
import Contact from './Contact';
import Experience from './Experience';
import MotionGraphics from './MotionGraphics';
import Projects from './Projects';
import ShortFilms from './ShortFilms';
import Team from './Team';
import TvCommercial from './TvCommercial';
import Vlog from './Vlog';
import WebSeries from './WebSeries';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
    section: 'About Me'
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  loadSection = (target, text) => {
    this.setState({section: target});
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    let renderContent;
    if (this.state.section === 'About Me'){
      renderContent = <AboutMe></AboutMe>
    } else if (this.state.section === 'Advertisement'){
      renderContent = <Advertisement></Advertisement>
    } else if (this.state.section === 'Contact'){
      renderContent = <Contact></Contact>
    } else if (this.state.section === 'Experiences'){
      renderContent = <Experience></Experience>
    } else if (this.state.section === 'Special Effects/Motion Graphics'){
      renderContent = <MotionGraphics></MotionGraphics>
    } else if (this.state.section === 'Projects'){
      renderContent = <Projects></Projects>
    } else if (this.state.section === 'Short Films'){
      renderContent = <ShortFilms></ShortFilms>
    } else if (this.state.section === 'Team'){
      renderContent = <Team></Team>
    } else if (this.state.section === 'TV Commercials'){
      renderContent = <TvCommercial></TvCommercial>
    } else if (this.state.section === 'Vlog'){
      renderContent = <Vlog></Vlog>
    } else if (this.state.section === 'Web Series'){
      renderContent = <WebSeries></WebSeries>
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Suchint Mandloi
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['About Me', 'Projects', 'Experiences', 'Team','Contact'].map((text, index) => (
              <ListItem onClick={this.loadSection.bind(this, text)} selected={this.state.section === text ? true : false} button key={text}>
                <ListItemIcon>
                  {index === 0 ? <SentimentVerySatisfiedIcon /> : (index === 1 ? <NextWeekIcon /> : (index === 2 ? <BusinessIcon /> : (index === 3 ? <PeopleIcon /> : (index === 4 ? <ContactPhoneIcon /> : <PeopleIcon />)))) }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Short Films', 'Web Series', 'TV Commercials','Special Effects/Motion Graphics','Vlog','Advertisement'].map((text, index) => (
              <ListItem onClick={this.loadSection.bind(this, text)} selected={this.state.section === text ? true : false} button key={text}>
                <ListItemIcon>
                  {index === 0 ? <VideocamIcon /> : (index === 1 ? <MovieIcon /> : (index === 2 ? <LiveTvIcon /> : (index === 3 ? <VideoLibraryIcon /> : (index === 4 ? <FeaturedVideoIcon /> : (index === 5 ? <VideoLabelIcon /> : <VideocamIcon />))))) }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {renderContent}
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);

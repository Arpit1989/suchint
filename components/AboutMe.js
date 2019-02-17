import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

import SimpleModal from './SimpleModal';

class AboutMe extends React.Component {
  state = { expanded: false };

 handleExpandClick = () => {
   this.setState(state => ({ expanded: !state.expanded }));
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
        <Grid direction="row" justify="center" container spacing={32}>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <div style={{height:'28.5rem',backgroundColor:'black'}}>
                  <video muted style={{opacity:0.5,position:'relative',bottom:'6rem',width:'100%'}} autoPlay src='/static/videos/kumbh.mp4'></video>
                </div>
                <CardContent>
                  <Typography style={{fontWeight:'600',color:'white',position:'absolute',top:'6rem',left:'4rem'}} component="h2" variant="h2">
                    Kumbh 2019
                  </Typography>
                  <Typography style={{textAlign:'justify',width:'350px',color:'white',position:'absolute',top:'11rem',left:'4rem'}} component="h5" variant='h5'>
                    An artistic soul, expressing and exploring my life with various
  creative digital mediums, trying to imbibe nature through visuals and express
  through my creations.
                  </Typography>
                    <Button onClick={this.handleExpandClick}  variant="contained" color="primary" className={classes.button}> About Me <KeyboardArrowDown className={classes.icon} /> </Button>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="Share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography align='justify' paragraph>
                      As a child, books were never my best friend, struggling with
                      contemporary school learning, eventually deciding on leaving behind weaknesses,
                      I started to dive in to the world of multimedia in my school years, and since then I
                      knew that world of visuals is my calling and creative freedom is my desire.
                      As a young boy, to understand the society and environment in a broader
                      perspective, I graduated with a degree in Journalism. My years in Journalism
                      college instilled a passion in me for art and cinema. Good cinema from across the
                      globe, absorbed me completely and since then, I have been pursuing my
                      passionate and individualistic journey in this field. Further to enrich the
                      experiences and to evolve my craft, I moved to Film and Television Institute of
                      India (FTII) Pune, and there began my super exciting and intense path of learning.
                      FTII is Asia’s best film school, in FTII the creative freedom was in the air, here I
                      soaked all out of the box ideas about cinematic world and armoured myself with
                      skills required to excel in expressing my true sense. Working with team of
                      passionate students and learning from all aspects of cinema, from action to
                      direction, cinematography details technicality to editing, from final touch of
                      animation to visual effects, my curiosity knew no bounds and life was again on
                      transformation mode.

                    </Typography>
                    <Typography align='justify' paragraph>
                      Mumbai was the next big step, it was like entering a war zone of cinema with
                      glamour and flashing lifestyle of Bollywood. Someone wise told me that a skilled
                      person with in-depth technical knowledge does not have to worry in life, as he will
                      only be better with time in mastering the art of cinematic weapons. With this
                      belief, I started to work in Prime focus and mastered in the field of visual effects. I
                      worked in more than 25 feature films of Hollywood and Bollywood for 3 years. I
                      learned nitty-gritties of production pipeline in Mumbai and the show went on.
                      After all the lessons absorbed from the Prime focus, it was time for me to step
                      aside from the competitive world of commercial cinema and enter the production
                      zone to achieve artistic fulfilment. As concept creator and creative Director, I
                      made an infotainment show “Born to Remember” for All India Radio that went on
                      air for 365 days.
                    </Typography>
                    <Typography align='justify' paragraph>
                      For the love of camera and experimental cinema, I made well appreciated
                      Documentaries for Border Security Force and Sahitya Academy that telecasted
                      over many Film Festivals IGNCA New Delhi, Indian Habitat Centre, Raza
                      Foundation’s at Muktiboth Centenary Festival, Raipur and Jan Utsav Bhopal etc.
                      Now it’s time for me to enter the dimension of online content in this era of
                      YouTube, Instagram and Facebook and to produce some of most unleased and
                      unconventional cinema altogether. Joining the Stream, I worked on and is still
                      working in few web series, short films and series of different Projects.
                      All throughout my journey, I have travelled as far as I can and for as long as I can!
                      My travels help me to get lost anywhere in this mind-blowing globe and at same
                      time I find myself and via Vlogs, I am sharing piece of my life to wider world!
                      My Passion is cinema and my destination in unknown
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </Grid>
      <Grid direction="row" justify="center" container spacing={32}>
          <Grid item md={12}>
              <h1> My Featured Work</h1>
          </Grid>
          <Grid container item md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/air.png"
                  title="Contemplative Reptile"
                  style={{backgroundSize:'contain',height:'10rem'}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    All India Radio
                  </Typography>
                  <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <SimpleModal youtubeLink='https://www.youtube.com/embed/fejE1Wiuv7w' buttonLabel="click to watch"></SimpleModal>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid container item md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/bsf.png"
                  title="Contemplative Reptile"
                  style={{backgroundSize:'contain',height:'10rem'}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Border Security Force
                  </Typography>
                  <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid container item md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/sa.jpeg"
                  title="Contemplative Reptile"
                  style={{backgroundSize:'contain',height:'10rem'}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    )};

}


AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles({ withTheme: true })(AboutMe);

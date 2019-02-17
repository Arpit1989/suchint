import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

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

class Projects extends React.Component {
  state = {
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <Grid direction="row" justify="center" container spacing={32}>
          <Grid item md={12}>
            <h1> Projects</h1>
          </Grid>
            <Grid container item md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/profile.png"
                    title="Contemplative Reptile"
                    style={{backgroundSize:'contain',height:'10rem'}}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Raza Foundation
                    </Typography>
                    <Typography component="p">
                      Complete coverage for the 3 days event happen at Indra Gandhi
International Center for Arts, IIC Event named Yuva made a film in 2018.
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
                    image="/static/images/profile.png"
                    title="Contemplative Reptile"
                    style={{backgroundSize:'contain',height:'10rem'}}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Hotel Himdev Shimla
                    </Typography>
                    <Typography component="p">
                      Made a Corporate film and Photoshoot for the website development for
Hotel Himdev 4 Star property in Shimla in 2018.
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
                    image="/static/images/profile.png"
                    title="Contemplative Reptile"
                    style={{backgroundSize:'contain',height:'10rem'}}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      PSI Foundation
                    </Typography>
                    <Typography component="p">
                      We took the responsibility for the Motion Graphics for the documentary in 2018.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    LinkedIn
                  </Button>
                  <Button size="small" color="primary">
                    Contact
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Grid direction="row" justify="center" container spacing={32}>
              <Grid container item md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/static/images/profile.png"
                      title="Contemplative Reptile"
                      style={{backgroundSize:'contain',height:'10rem'}}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Sahitya Academy
                      </Typography>
                      <Typography component="p">
                        Concept &amp; Directed a Self-portrait documentary on Famous Urdu Writer
“Sheen Kaaf Nizzam” in 2017.

In 10th World Hindi Conference we have made two Audio &amp; video film Sahitya
Academy Bhopal, Film has been telecast throughout the conference for Three
days 2015.
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
                      image="/static/images/profile.png"
                      title="Contemplative Reptile"
                      style={{backgroundSize:'contain',height:'10rem'}}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        IGNOU
                      </Typography>
                      <Typography component="p">
                        Directed 2 episode Douc-drama series on Bharatendu Harishchandra on his
life and the contribution in the field of Hindi Literature in 2017.
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
                      image="/static/images/profile.png"
                      title="Contemplative Reptile"
                      style={{backgroundSize:'contain',height:'10rem'}}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Xbhp.tv
                      </Typography>
                      <Typography component="p">
                        Motographer online series coving the globe on 2 wheel. Last ride just
finished trip to Australia complete post production in October 2018.
 XBHP O2 ride is musical journey for the team xbhp across the India
covering more the 17 cities. Complete post production Edit, Sound,
Motion Graphics and Voice overs in 2018.
 India 0 to 100 Motorcycles is Web series of 45 Episodes. In the series WTA
is taking care of complete Post Production including Edit, Sound, Motion
Graphics and Voice overs in 2016-17.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      LinkedIn
                    </Button>
                    <Button size="small" color="primary">
                      Contact
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
            <Grid direction="row" justify="center" container spacing={32}>
                <Grid container item md={4}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="/static/images/profile.png"
                        title="Contemplative Reptile"
                        style={{backgroundSize:'contain',height:'10rem'}}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Border Security Force
                        </Typography>
                        <Typography component="p">
                          TVC/ AD film for Border Security Force On the completion of 50 years.
Complete in-house project produced for BSF 2015.
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
                        image="/static/images/profile.png"
                        title="Contemplative Reptile"
                        style={{backgroundSize:'contain',height:'10rem'}}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          All India Radio (Education show)
                        </Typography>
                        <Typography component="p">
                          Radio Show Born to be remembered has complete 365 Episodes from (15 April
2013 to 14 April 2014) for All India Radio. This was on air by FM Rainbow &amp; FM
Gold. The program refreshed noted events that occurred and illustrious lives of
people who made history.
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
                        image="/static/images/profile.png"
                        title="Contemplative Reptile"
                        style={{backgroundSize:'contain',height:'10rem'}}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Doordarshan
                        </Typography>
                        <Typography component="p">
                          Production &amp; Post production Assistance for SRP Entertainment Pvt. ltd for
daily soap opera called Mangalsutra Ek Mariyada.
Visual Effects for Naadyogi Shiv telecast on Doordarshan.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        LinkedIn
                      </Button>
                      <Button size="small" color="primary">
                        Contact
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>

              <Grid direction="row" justify="center" container spacing={32}>
                  <Grid container item md={4}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image="/static/images/profile.png"
                          title="Contemplative Reptile"
                          style={{backgroundSize:'contain',height:'10rem'}}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            BJP Promotional video
                          </Typography>
                          <Typography component="p">
                            Created promotional video for the live camera multimedia van.
(Jammu &amp; Kashmir Election 2015)
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
                          image="/static/images/profile.png"
                          title="Contemplative Reptile"
                          style={{backgroundSize:'contain',height:'10rem'}}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Lakme India, Hindustan Unilever Limited(Mumbai India)
                          </Typography>
                          <Typography component="p">
                            Advertisement Director + Cinematographer + Editor for LAKME ABOSLUT
SCULPT
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
                          image="/static/images/profile.png"
                          title="Contemplative Reptile"
                          style={{backgroundSize:'contain',height:'10rem'}}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            IN-CONTINUUM (SLEEPER CLASS FILMS, Mumbai, INDIA)
                          </Typography>
                          <Typography component="p">
                            Cinematography for the Best Film at Rajasthan Film Festival 2015.
Publicity and Artwork
Official Selection at San Francisco Film Festival
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          LinkedIn
                        </Button>
                        <Button size="small" color="primary">
                          Contact
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>


                <Grid direction="row" justify="center" container spacing={32}>
                    <Grid container item md={4}>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image="/static/images/profile.png"
                            title="Contemplative Reptile"
                            style={{backgroundSize:'contain',height:'10rem'}}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Bhartiya Gyan Peith
                            </Typography>
                            <Typography component="p">
                              Provided all sort of Illustrations, layout designs, photographs for the magazine
covers. Solely responsible for the renewed look of the magazine.
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


Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles({ withTheme: true })(Projects);

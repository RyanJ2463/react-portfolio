import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import treasurehunt from '../assests/treasurehunt.gif'
import space from '../assests/space.png'
import star from '../assests/star.png'
import cattinder from '../assests/cattinder.jpeg'
import { Grid } from '@mui/material';


const Projects = () => {
  return (
    <div className='projects'>
        <h1 className='project-title'>My Projects</h1>
        <div className='carousel'>
        <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ minWidth: 245, maxHeight: 500, borderRadius: 5, mx: 5 }} className='project-card'>
            <CardMedia
                component="img"
                alt="treasurehunt"
                height="250"
                image={treasurehunt}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Treasure Hunt
                </Typography>
                <Typography variant="body2" color="text.secondary">
                A basic web application built during a 3-day course that goes over the basics and fundamentals of development. The application contains a small treasure hunt board game, 4x4 table that is created using HTML and functionality using JavaScript.
                </Typography>
            </CardContent>
            <CardActions>
                <a href='https://github.com/RyanJ2463/Ryanj2463.github.io' target='_blank' rel="noreferrer">
                    <Button size="small">Source code</Button>
                </a>
                <a href='https://ryanj2463.github.io/' target='_blank' rel="noreferrer">
                    <Button size="small">Live</Button>
                </a>
            </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{  minWidth: 245, maxHeight: 500, borderRadius: 5, mx: 5 }} className='project-card'>
            <CardMedia
                component="img"
                alt="star"
                height="250"
                image={star}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Star Tunes 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Star Tunes is a React in Rails full stack application. It's a random song generator that show cases basic CRUD functionality.
                </Typography>
            </CardContent>
            <CardActions>
                <a href='https://github.com/RyanJ2463/StarTunes' target='_blank' rel="noreferrer">
                    <Button size="small">Source code</Button>
                </a>
                <a href='http://startunes.herokuapp.com/' target='_blank' rel="noreferrer">
                    <Button size="small">Live</Button>
                </a>
            </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ minWidth: 245, maxHeight: 500,  borderRadius: 5, mx: 5 }} className='project-card'>
            <CardMedia
                component="img"
                alt="cattinder"
                height="250"
                image={cattinder}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Cat Tinder
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Cat Tinder is an full stack application built using React in rails. This project is to display basic CRUD functionality with the utilization of an API fetching data from the local host and being able to see it on the front end.
                </Typography>
            </CardContent>
            <CardActions>
                <a href='https://github.com/RyanJ2463/cat-tinder-frontend-birman-ryan-nate' target='_blank' rel="noreferrer">
                    <Button size="small">Source code</Button>
                </a>
            </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{  minWidth: 245, maxHeight: 500, borderRadius: 5, mx: 5 }}>
            <CardMedia
                component="img"
                alt="NASA API"
                height="250"
                src={space}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Astronomy Picture of the Day
                </Typography>
                <Typography variant="body2" color="text.secondary">
                A web application that shows a new Astronomy picture everyday by utilizing NASA's external API
                </Typography>
            </CardContent>
            <CardActions>
            <a href='https://github.com/RyanJ2463/space-api' target='_blank' rel="noreferrer">
                <Button size="small">Source code</Button>
            </a>
            </CardActions>
        </Card>
        </Grid>
        </Grid>
        </div>
    );

    </div>
  )
}

export default Projects
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import treasurehunt from '../assests/treasurehunt.gif'
import space from '../assests/space.png'

const Projects = () => {
  return (
    <div className='projects'>
        <h1 className='project-title'>My Projects</h1>
        <div className='carousel'>
        <Card sx={{ maxWidth: 345, borderRadius: 5 }} className='project-card'>
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
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
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
        <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
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
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
            <a href='https://github.com/RyanJ2463/space-api' target='_blank' rel="noreferrer">
                <Button size="small">Source code</Button>
            </a>
            </CardActions>
        </Card>
        </div>
    );

    </div>
  )
}

export default Projects
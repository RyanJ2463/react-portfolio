import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ryanjacobell from '../assests/ryanjacobell.pdf'

const Home = () => {
  return (
    <div className='home'>
        <div className='home-info'>
            <h1 className='home-title'>Ryan Jacobell</h1>
            <h3 className='home-welcome'>Welcome to my portfolio, have a look around</h3>
        </div>
        <div className='icons'>
          <a href='https://github.com/RyanJ2463' target='_blank' rel="noreferrer">
          <GitHubIcon  sx={{fontSize: 90, color: 'white'}} ></GitHubIcon>
          </a>
          <a href='https://www.linkedin.com/in/ryan-jacobell-63b7ba1b9/' target='_blank' rel="noreferrer">
            <LinkedInIcon  sx={{fontSize: 90, color: 'white'}}></LinkedInIcon>
          </a>
          <a href='mailto:Jacobellr2017@gmail.com' target="_blank"  rel="noreferrer">
            <EmailIcon  sx={{fontSize: 90, color: 'white'}}   ></EmailIcon>
          </a>
          <a href={ryanjacobell} download="newfilename" target="_blank"  rel="noreferrer">
            <PictureAsPdfIcon  sx={{fontSize: 90, color: 'white'}}   ></PictureAsPdfIcon>
          </a>
        </div>
    </div>
  )
}

export default Home
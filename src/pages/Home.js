import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
  return (
    <div className='home'>
        <div className='home-info'>
            <h1 className='home-title'>Ryan Jacobell</h1>
            <h3 className='home-welcome'>Welcome to my portfolio, have a look around</h3>
        </div>
        <div className='icons'>
          <a href='https://github.com/RyanJ2463' target='_blank' rel="noreferrer">
          <GitHubIcon  sx={{fontSize: 100, color: 'white'}} ></GitHubIcon>
          </a>
          <a href='https://www.linkedin.com/in/ryan-jacobell-63b7ba1b9/' target='_blank' rel="noreferrer">
            <LinkedInIcon  sx={{fontSize: 100, color: 'white'}}></LinkedInIcon>
          </a>
          <a href='mailto:Jacobellr2017@gmail.com' target="_blank"  rel="noreferrer">
            <EmailIcon  sx={{fontSize: 100, color: 'white'}}   ></EmailIcon>
          </a>
        </div>
    </div>
  )
}

export default Home
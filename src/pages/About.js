import React from 'react'

const About = () => {
  return (
    <div className='about'>
        <div className='text-about'>
            <h1 class="about-me">About me</h1>
            <p class="my-paragraph">I'm Ryan, a full-stack web-developer. I come from a military background, but decided to make a career change and challenge myself to learn a new set of skills and to follow my passion for technology. I left the Marine Corps and enrolled in a Full Stack development course. I plan to continue to learn and grow within my newly developed skills.</p>
        </div>
        
        <div className='about-icons-stack'>
            <img className='about-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt=''/>
            <img className='about-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt=''/>
            <img className='about-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='' />
            <img className='about-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" alt=''/>
            <img className='about-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt=''/>
            <img className='about-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt=''/>
            <img className='about-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt=''/>
        </div>
    </div>
  )
}

export default About
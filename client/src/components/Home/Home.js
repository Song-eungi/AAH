import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from './portfolio'
import './About.css'
import Skills from './skills'
import Contact from './contact'
import Navbar from "./Navbar";

const About = () => {
  const {photo,name, role, description, resume, social } = about

  return (
    <div className='about center'>
      <Navbar />
      {photo && (
       <img height="200px" className="center" alt="Avatar placeholder" src={photo} />
      )}
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
      <Skills />
        <Contact />
    </div>
  )
}

export default About
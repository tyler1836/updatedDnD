import React from 'react'
import dnd from '../dnd.png'
import {AiFillGithub} from 'react-icons/ai'

function Home() {
  return (
    <div className='home'>
    <img src={dnd} alt="" srcset="" className='banner' />
    <div className='welcome'>
        <h1>Welcome to Dungeons and Disasters</h1>
        <h3>This is a solo project built by myself Tyler</h3>
        <p>I am a full stack web developer with a passion for video games, ttrpgs, and great storytelling. I wanted to make a fun website with some animations and some automation surrounding leveling. This has been a very large project and as a solo dev on it there may be some issues and bugs. I will leave my info down below as well as the repo url for any developers that want to fork it and make it there own. Last little bit I am hard at work on making a guide to how the website works and all the little details you can expect from using this site. Anyway I hope you enjoy</p>
    </div>
    <a href="https://github.com/tyler1836/updateddnd" target="_blank" rel='noreferrer noopener'><AiFillGithub style={{fontSize: "4rem"}}/></a>
    <p>Email and contact info can be found by clicking the github icon above 😁</p>
</div>
  )
}

export default Home
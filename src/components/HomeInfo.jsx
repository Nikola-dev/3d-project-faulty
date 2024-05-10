import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => {
    return (
      <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link
         to={link}
         className='neo-brutalism-white neo-btn'>
         {btnText}
         <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
      </div>
    );
  };


const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am 
        <span className='font-semibold'> Nikola👋</span>
        <br/>A Software Engineer from Serbia
        <br/>
        </h1>
    ),
    2: (
        <InfoBox
       text="Since my early years, I've been captivated by computers, which naturally led me to pursue a career in that field. Through self-study and a constant eagerness to learn and create, I've landed myself a Full Stack position in companies I worked for. "
       link="/about"
       btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
       text="I thrive on collaborative projects, finding immense value in teamwork. Sharing knowledge and experiences within a team setting not only fosters camaraderie but also contributes to the collective growth and development of each team member. "
       link="/projects"
       btnText="Portfolio"
         />
    ),
    4: (
        <InfoBox
       text="Looking for a dev? Let's get to know eachother! "
       link="/contact"
       btnText="Let's talk!"
         />
    ),
};


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
  
}

export default HomeInfo
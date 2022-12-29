import React from 'react';
import './ProfileCard.css';
import ProfilePic from '../../assets/img/example-profile.jpg';
import Tilt from 'react-parallax-tilt';

const ProfileCard = () => {
  return (
    <div className='innerContainer'>
    <Tilt 
        tiltReverse={true} 
        glareEnable={true}
        tiltAngleYInitial={-15} 
        glareMaxOpacity={2.8} 
        glareColor="#ffffff" 
        glarePosition="top" 
        glareBorderRadius="15px">
        <div class="profile-card">
            <img src={ProfilePic} alt='card-img' class="profile-card__pic"></img>
            <div class="profile-card__info">
                <h1 class="profile-card__name">Carlos Gaston Nunes Bispo</h1>
                <p class="profile-card__occupations">Private Security Advisor - Web Developer</p>
                <p class="profile-card__nationality">Argentine</p>              
            </div>
        </div>
    </Tilt>
    </div>
  )
}

export default ProfileCard
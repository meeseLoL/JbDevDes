import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my projects and skillsets!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/JBDevDesign.jpg'
              text='Developer, engineer, designer'
              label='Justin Ballard @ Github'
              path='https://github.com/meeseLoL'
            />
            <CardItem
              src='./images/Tindogjbdev.png'
              text='A place where dogs can find love too'
              label='tindog'
              path='https://meeselol.github.io/tindog/'
            />

           
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/Threejsdevdesign.png'
              text='Enhance your website with 3D modeling and UI/UX interactive experiences'
              label='3D Modeling/Texturing'
              path='/services'
            />
            <CardItem
              src='./images/Reactdevdesign.png'
              text='Expert in common front end frameworks'
              label='Professional Frameworks'
              path='/products'
            />
            <CardItem
              src='./images/webdevdesign.png'
              text='Providing professional quality to your web page'
              label='Front-end Engineer'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
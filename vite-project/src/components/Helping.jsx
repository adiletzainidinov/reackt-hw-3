import React from 'react';
import Thrivetalk from './header/Thrivetalk';
import '../App.css';
import helpingbacfirst from '../assets/img/Rectangle 3.1.png';
import helpingpeople from '../assets/img/Mask Group.png';
import Lifes from './Lifes';
import Terapevt from './Terapevt';
import WhoAmIBtn from './WhoAmIBtn';
import IDo from './IDo';

const Helping = () => {
  return (
    <>
      <div className="container ">
        <div className="helping">
          <div className="helping-left">
            <Thrivetalk />
            <Lifes />
            <Terapevt />

            <div className='about-me'>
              <WhoAmIBtn/>
              <IDo/>
            </div>
            <div className='helpingbacfirst'>
              <img src={helpingbacfirst} alt="img" />{' '}
            </div>
            <div className='helpingpeople'>
              <img src={helpingpeople} alt="img" />
            </div>
          </div>
          <div className="helping-bac" />
        </div>
      </div>
    </>
  );
};

export default Helping;

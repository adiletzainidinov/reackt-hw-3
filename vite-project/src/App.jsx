import React from 'react';
import './App.css';
import Header from './components/Header';
import Helping from './components/Helping';
import Thrive from './components/Thrive.jsx';
import AboutUs from './components/AboutUs';
import Card from './components/Card/Card';
import Nutritional from './components/Nutritional/Nutritional';
import Should from './components/Should/Should';
import Contant from './components/Should/Contant';
import ShouldImg from './components/Should/ShouldImg';
import ready from './assets/img/charles-etoroma-390119.png';
import SomeInfo from './components/SomeInfo/SomeInfo';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Helping />
      <Thrive />
      <AboutUs />
      <div className="card-app container">
        {' '}
        <Card
          background={'#FFE2DE'}
          text={'Physical Health'}
          width={'358px'}
          height={'360px'}
          linewidth={'255px'}
          lineheight={'2px'}
          linecolor={'white'}
        />
        <Card
          background={'#C4E769'}
          text={'Running  & Spinning'}
          width={'358px'}
          height={'360px'}
          linewidth={'255px'}
          lineheight={'2px'}
          linecolor={'white'}
        />
        <Card
          background={'#62D0DF'}
          text={'Pumping Iron'}
          width={'358px'}
          height={'360px'}
          linewidth={'255px'}
          lineheight={'2px'}
          linecolor={'white'}
        />
        <Card
          background={'#0052C1'}
          text={'Pumping Iron'}
          width={'358px'}
          height={'360px'}
          linewidth={'255px'}
          lineheight={'2px'}
          linecolor={'white'}
        />
      </div>
      <div className="container cardsr">
        <Card
          background={'#22356F'}
          text={'Physical Health'}
          width={'478px'}
          height={'480px'}
          linewidth={'340px'}
          lineheight={'2px'}
          linecolor={'white'}
          top={'24px'}
        />
        <Card
          background={'#0052C1'}
          text={'Mental Health'}
          width={'478px'}
          height={'480px'}
          linewidth={'340px'}
          lineheight={'2px'}
          linecolor={'white'}
          top={'24px'}
        />
        <Card
          background={'#434335'}
          text={'Nutrion'}
          width={'478px'}
          height={'480px'}
          linewidth={'340px'}
          lineheight={'2px'}
          linecolor={'white'}
          top={'24px'}
        />
      </div>
      <div className="container cardsr">
        <Card
          background={'#62D0DF'}
          text={'Gymnastics'}
          width={'478px'}
          height={'480px'}
          linewidth={'340px'}
          lineheight={'2px'}
          linecolor={'white'}
          top={'24px'}
        />
        <Card
          background={'#DEE1FF'}
          text={'Crossfit'}
          width={'478px'}
          height={'480px'}
          linewidth={'340px'}
          lineheight={'2px'}
          linecolor={'white'}
          top={'24px'}
        />
        <Card
          background={'#8F00FF'}
          text={'Aerobics'}
          width={'478px'}
          height={'480px'}
          linewidth={'340px'}
          lineheight={'2px'}
          linecolor={'white'}
          top={'24px'}
        />
      </div>
      <div className="container nutritional-papa">
        <div className="nutritional-top">
          {' '}
          <Nutritional
            title={'Nutritional Plans'}
            text={
              'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
            }
          />
          <Nutritional
            title={'Weight Loss'}
            text={
              'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
            }
          />
          <Nutritional
            title={'Mental Peace'}
            text={
              'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
            }
          />
        </div>
        <div className="nutritional-bottom">
          {' '}
          <Nutritional
            title={'Home Training'}
            text={
              'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
            }
          />
          <Nutritional
            title={'Work/Life Balance'}
            text={
              'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
            }
          />
          <Nutritional
            title={'Cardio'}
            text={
              'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
            }
          />
        </div>
      </div>
      <Should />
      <div className="ready container">
        <Contant
          title={'YOU SHOULD ALSO KNOW'}
          text={
            'MDD affects more than 16.1 million American adults, or about 6.7%of the U.S. population age 18 and older in a given year. We at ThriveTalk can help you.'
          }
          ftext={'GET HELP NOW'}
          color={'white'}
          hthree={'#62D0DF'}
          background={'#22356F'}
        />
        <ShouldImg img={ready} />
      </div>
      <SomeInfo />
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import LOVEDIVE from '../asset/LOVEDIVE.jpg';
import TOMBOY from '../asset/TomBoy.jpg';
import ELEVEN from '../asset/Eleven.jpg';
import HypeBoy from '../asset/HypeBoy.jpg';
import FEARLESS from '../asset/FEARLESS.jpg';



function Home() {
  return (
    <div>
      <h1 className='Today'>Today's Recommend</h1>
    <div className='Recommend'>
      <div className='Recommend_Carousel' style={{ width: '50%', height: 'auto', objectFit:'cover' }}>
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100" src={LOVEDIVE} alt="First slide" style={{width: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100" src={TOMBOY} alt="Second slide" style={{ width: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
 
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100" src={ELEVEN} alt="Third slide" style={{width: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100" src={HypeBoy} alt="Third slide" style={{width: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100" src={FEARLESS} alt="Third slide" style={{width: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='Recommend_Table'>
      <div className='Recommend_Text'>
        <Link to="/LOVEDIVE">
        <h2>LOVEDIVE</h2>
          <p>IVE</p>
        </Link>
      </div>
      <div className='Recommend_Text'>
        <Link to="/LE SSERAFIM/PerfectNight">
        <h2>TOMBOY</h2>
          <p>(G)I-DLE</p>
        </Link>
      </div>
      <div className='Recommend_Text'>
        <Link to="/QWER/Discord">
        <h2>ELEVEN</h2>
          <p>IVE</p>
        </Link>
      </div>
      <div className='Recommend_Text'>
        <Link to="/TAEYEON/TO.X">
        <h2>HypeBoy</h2>
          <p>NewJeans</p>
        </Link>
      </div>
      <div className='Recommend_Text'>
        <Link to="/IVE/I AM">
        <h2>FEARLESS</h2>
          <p>LE SSERAFIM</p>
        </Link>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Home;
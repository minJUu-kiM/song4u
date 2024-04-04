import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Instagram from '../asset/Instagram.jpg';
import 밤이되니까 from '../asset/밤이되니까.jpg';
import 기억의빈자리 from '../asset/기억의빈자리.jpg';
import 비도오고그래서 from '../asset/비도오고그래서.jpg';
import 한숨 from '../asset/한숨.jpg';
import '../styles/RnBSoul.css';
import { NavLink } from 'react-bootstrap';
import MoreRnBSoul from './MoreRnBSoul';




function RnBSoul() {
  return (
    <div>
      <h1 className='Today'>R&B Soul</h1>
    <div className='Recommend'>
      <div className='Recommend_Carousel' style={{ width: '50%', height: 'auto', objectFit:'cover' }}>
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100" src={Instagram} alt="First slide" style={{width: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
          <h3>Instagram</h3>
          <p>DEAN</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100" src={밤이되니까} alt="Second slide" style={{ width: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
          <h3>밤이 되니까</h3>
          <p>펀치</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100" src={기억의빈자리} alt="Third slide" style={{width: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
          <h3>기억의 빈자리</h3>
          <p>나얼</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100" src={비도오고그래서} alt="Third slide" style={{width: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
          <h3>비도 오고 그래서</h3>
          <p>헤이즈</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100" src={한숨} alt="Third slide" style={{width: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
          <h3>한숨</h3>
          <p>이하이</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='Recommend_Table'>
      <div className='Recommend_Text'>
        <NavLink to="/aespa/Drama">
        <h2> Instagram</h2>
        <p> DEAN</p>
        </NavLink>
      </div>
      <div className='Recommend_Text'>
        <NavLink to="/LE SSERAFIM/PerfectNight">
        <h2> 밤이 되니까</h2>
        <p> 펀치</p>
        </NavLink>
      </div>
      <div className='Recommend_Text'>
        <NavLink to="/QWER/Discord">
        <h2> 기억의 빈자리</h2>
        <p> 나얼</p>
        </NavLink>
      </div>
      <div className='Recommend_Text'>
        <NavLink to="/TAEYEON/TO.X">
        <h2> 비도 오고 그래서</h2>
        <p> 헤이즈</p>
        </NavLink>
      </div>
      <div className='Recommend_Text'>
        <NavLink to="/IVE/I AM">
        <h2> 한숨</h2>
        <p> 이하이</p>
        </NavLink>
      </div>
    </div>
    </div>
    <button className='More'>More R&B Soul</button>
    </div>
  );
}



export default RnBSoul;
import React from 'react';
import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import '../styles/Situation.css'
import Sensibility from './Sensibility';
import Walk from './Walk';
import Exercise from './Exercise';
import Commute from './Commute';
import HouseParty from './HouseParty';
import Beach from './Beach';
import Vacation from './Vacation';
import Confession from './Confession';
import Show from './Show';
import Drive from './Drive';
import Awards from './Awards';
import Popularity from './Popularity';
import Work from './Work';
import House from './House';
import Concentration from './Concentration';
import Rest from './Rest';
import Sen1 from './Sen1';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, NavLink } from 'react-router-dom';



  const Situation = () => {
    let [tab, setTab] = useState(0);
  
    return (
      <>
      <div className='SituationRe'>
        <div className='SituationSidebar nav'>
          <Nav variant='tabs' defaultActiveKey='link-1'>
              <Nav.Item>
                <Nav.Link eventKey='link-1' onClick={() => setTab(0)} className={`SituationTabItem ${tab === 0 ? 'SituationSelected' : ''}`} >
                  Sensibility
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-2' onClick={() => setTab(1)} className={`SituationTabItem ${tab === 1 ? 'SituationSelected' : ''}`}>
                  Relaxation
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-3' onClick={() => setTab(2)} className={`SituationTabItem ${tab === 2 ? 'SituationSelected' : ''}`}>
                  Drive
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-4' onClick={() => setTab(3)} className={`SituationTabItem ${tab === 3 ? 'SituationSelected' : ''}`}>
                  Rainy Day
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-5' onClick={() => setTab(4)} className={`SituationTabItem ${tab === 4 ? 'SituationSelected' : ''}`}>
                  Love
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-6' onClick={() => setTab(5)} className={`SituationTabItem ${tab === 5 ? 'SituationSelected' : ''}`}>
                  Strees
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-7' onClick={() => setTab(6)} className={`SituationTabItem ${tab === 6 ? 'SituationSelected' : ''}`}>
                  Exercise
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-8' onClick={() => setTab(7)} className={`SituationTabItem ${tab === 7 ? 'SituationSelected' : ''}`}>
                  Memories
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-9' onClick={() => setTab(8)} className={`SituationTabItem ${tab === 8 ? 'SituationSelected' : ''}`}>
                  Rest
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-10' onClick={() => setTab(9)} className={`SituationTabItem ${tab === 9 ? 'SituationSelected' : ''}`}>
                  Healing
                </Nav.Link>
              </Nav.Item>
          </Nav>
        </div>
        {tab === 0 ? <div className='SituationContent'><Sensibility/></div> : null}
        {tab === 1 ? <div className='SituationContent'><Walk/></div> : null}
        {tab === 2 ? <div className='SituationContent'><Exercise/></div> : null}
        {tab === 3 ? <div className='SituationContent'><Commute/></div> : null}
        {tab === 4 ? <div className='SituationContent'><HouseParty/></div> : null}
        {tab === 5 ? <div className='SituationContent'><Beach/></div> : null}
        {tab === 6 ? <div className='SituationContent'><Vacation/></div> : null}
        {tab === 7 ? <div className='SituationContent'><Confession/></div> : null}
        {tab === 8 ? <div className='SituationContent'><Show/></div> : null}
        {tab === 9 ? <div className='SituationContent'><Drive/></div> : null}
        {tab === 10 ? <div className='SituationContent'><Awards/></div> : null}
        {tab === 11 ? <div className='SituationContent'><Popularity/></div> : null}
        {tab === 12 ? <div className='SituationContent'><Work/></div> : null}
        {tab === 13 ? <div className='SituationContent'><House/></div> : null}
        {tab === 14 ? <div className='SituationContent'><Concentration/></div> : null}
        {tab === 15 ? <div className='SituationContent'><Rest/></div> : null}
        </div>

      </>
    );
    }

export default Situation;
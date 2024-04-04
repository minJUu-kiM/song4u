import React from 'react';
import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import RnBSoul from './RnBSoul';
import Dance from './Dance';
import GDramam from './GDramam';
import RapHiphop from './RapHiphop';
import RockMetal from './RockMetal';
import Ballad from './Ballad';
import Indi from './Indi';
import Movie from './Movie';
import Ect from './ect';
import '../styles/NGenre.css'
  
  const NGenre = () => {
    let [tab, setTab] = useState(0);
  
    return (
      <>
      <div className='GenreRe'>
        <div className='GenreSidebar nav'>
          <Nav variant='tabs' defaultActiveKey='link-1'>
              <Nav.Item>
                <Nav.Link eventKey='link-1' onClick={() => setTab(0)} className={`GenreTabItem ${tab === 0 ? 'GenreSelected' : ''}`} >
                  R&B Soul
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-2' onClick={() => setTab(1)} className={`GenreTabItem ${tab === 1 ? 'GenreSelected' : ''}`}>
                  Dance
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-3' onClick={() => setTab(2)} className={`GenreTabItem ${tab === 2 ? 'GenreSelected' : ''}`}>
                  Drama
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-4' onClick={() => setTab(3)} className={`GenreTabItem ${tab === 3 ? 'GenreSelected' : ''}`}>
                  Rap&HipHop
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-5' onClick={() => setTab(4)} className={`GenreTabItem ${tab === 4 ? 'GenreSelected' : ''}`}>
                  Rock&Metal
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-6' onClick={() => setTab(5)} className={`GenreTabItem ${tab === 5 ? 'GenreSelected' : ''}`}>
                  Ballad
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-7' onClick={() => setTab(6)} className={`GenreTabItem ${tab === 6 ? 'GenreSelected' : ''}`}>
                  Indi
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey='link-9' onClick={() => setTab(8)} className={`GenreTabItem ${tab === 8 ? 'GenreSelected' : ''}`}>
                  Ect
                </Nav.Link>
              </Nav.Item>
          </Nav>
        </div>
        {tab === 0 ? <div className='GenreContent'><RnBSoul/></div> : null}
        {tab === 1 ? <div className='GenreContent'><Dance/></div> : null}
        {tab === 2 ? <div className='GenreContent'><GDramam/></div> : null}
        {tab === 3 ? <div className='GenreContent'><RapHiphop/></div> : null}
        {tab === 4 ? <div className='GenreContent'><RockMetal/></div> : null}
        {tab === 5 ? <div className='GenreContent'><Ballad/></div> : null}
        {tab === 6 ? <div className='GenreContent'><Indi/></div> : null}
        {tab === 8 ? <div className='GenreContent'><Ect/></div> : null}
        </div>
      </>
    );
    }

export default NGenre;
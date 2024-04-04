
import sen2 from '../asset/sen2.jpg';
import sen3 from '../asset/sen3.jpg';
import sen4 from '../asset/sen4.jpg';
import sen5 from '../asset/sen5.jpg';
import sen6 from '../asset/sen6.jpg';
import sen7 from '../asset/sen7.jpg';
import sen8 from '../asset/sen8.jpg';
import sen9 from '../asset/sen9.jpg';
import sen10 from '../asset/sen10.jpg';
import sen11 from '../asset/sen11.jpg';
import sen12 from '../asset/sen12.jpg';
import sen13 from '../asset/sen13.jpg';
import sen14 from '../asset/sen14.jpg';
import sen15 from '../asset/sen15.jpg';
import sen16 from '../asset/sen16.jpg';
import sen17 from '../asset/sen17.jpg';
import '../styles/Sensibility.css'
import { NavLink, Route } from 'react-router-dom';
import Sen1 from './Sen1';


const Sensibility = () => {
  return (
    <div>
      <h1 className='SenTitle'>Sensibility</h1>
      <table className='SenTable'>
        <tr>
          <td className='SenPly'>
            <NavLink to='/Sen1'>
            <img src={sen17} alt="sen17" className='SenImg'/>
            <h3 className='SenPlyName'>추운 겨울 눈 오는 날 생각나는 감성 발라드</h3>
            </NavLink>
          </td>
          <td className='SenPly'>
          <img src={sen4} alt="sen4" className='SenImg'/>
            <h3 className='SenPlyName'>2030 눈물 쏟게 하는 2010대 발라드 명곡</h3>
          </td>
          <td className='SenPly'>
          <img src={sen5} alt="sen5" className='SenImg'/>
            <h3 className='SenPlyName'>하루 종일 편하게 듣기 좋은 미디엄 템포 발라드</h3>
          </td>
          <td className='SenPly'>
          <img src={sen7} alt="sen7" className='SenImg'/>
            <h3 className='SenPlyName'>추억의 명곡! 세대초월 리메이크 노래</h3>
          </td>
        </tr>
        <tr>
          <td className='SenPly'>
          <img src={sen8} alt="sen8" className='SenImg'/>
            <h3 className='SenPlyName'>가창력 폴발! 고음 발라드 노래방 애창곡&추천곡</h3>
          </td>
          <td className='SenPly'>
          <img src={sen9} alt="sen9" className='SenImg'/>
            <h3 className='SenPlyName'>듣기만 해도 연애하고 싶어지는 달달한 사랑 노래</h3>
          </td>
          <td className='SenPly'>
          <img src={sen11} alt="sen11" className='SenImg'/>
            <h3 className='SenPlyName'>주문하신 K-캐롤 배달왔습니다</h3>
          </td>
          <td className='SenPly'>
          <img src={sen12} alt="sen12" className='SenImg'/>
            <h3 className='SenPlyName'>명곡은 돌고 돈다: 리메이크 노래 모음</h3>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Sensibility;
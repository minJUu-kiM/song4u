import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
import 저기창밖을봐눈이오잖아 from '../asset/저기창밖을봐눈이오잖아.jpg';
import 겨울잠 from '../asset/겨울잠.jpg';
import 겨울이좋아졌어 from '../asset/겨울이좋아졌어.jpg';
import 겨울이오면 from '../asset/겨울이오면.jpg';
import 하얀거짓말 from '../asset/하얀거짓말.jpg';
import '../styles/Sen1.css';

const songs = [
  { title: "바라봐줘요", artist: "죠지" },
  { title: "빛 (Feat. 백예린)", artist: "적재" },
  { title: "하얀 거짓말 (White Lie)", artist: "NCT 127" },
  { title: "그 겨울엔 네가 있어", artist: "허용별 (허각, 신용재, 임한별)" },
  { title: "첫 겨울이니까", artist: "성시경, 아이유" },
  { title: "문 (Moon)", artist: "NCT DREAM" },
  { title: "저기 창밖을 봐 눈이 오잖아 (feat. 폴킴)", artist: "박원" },
  { title: "첫눈", artist: "양요섭" },
  { title: "기적 (You Are My Life)", artist: "HYNN (박혜원)" },
  { title: "나의 겨울", artist: "박재정" },
  { title: "추억 일기", artist: "먼데이 키즈 (Monday Kiz)" },
  { title: "우리의 계절", artist: "WSG워너비(4FIRE)" },
  { title: "이 겨울이 지나면 그땐 봄이 올까요", artist: "전상근, 리트너 프로젝트" },
  { title: "그 겨울이 잠든 거리에서", artist: "경서예지, 전건호" },
  { title: "겨울이 좋아졌어", artist: "정승환" },
  { title: "눈 빛 (snow light)", artist: "홍대광" },
  { title: "그댈 위한 노래", artist: "거미" },
  { title: "넌 어디에 (Where You Are)", artist: "려욱 (RYEOWOOK), 온유 (ONEW), 도영 (DOYOUNG), 천러 (CHENLE), 샤오쥔 (XIAOJUN)" },
  { title: "겨울이 오면", artist: "하현상" },
  { title: "가로등", artist: "서로 (Suh Ro)" },
  { title: "그날의 그대여", artist: "헤이즈 (Heize)" },
  { title: "Goodbye My Love", artist: "진민호" },
  { title: "이 순간을 선물해 준 너에게 고마워", artist: "지진석" },
  { title: "잊을 수 있을까", artist: "노을" },
  { title: "When It's Cold", artist: "빌리어코스티" },
  { title: "기억이란 사랑보다", artist: "케빈오" },
  { title: "다시 겨울이야", artist: "박정현" },
  { title: "Christmas Tree", artist: "V" },
  { title: "러브레터", artist: "아이유" },
  { title: "우리는 모두 어른이 될 수 없었다 (Feat. 종한)", artist: "고닥" },
  { title: "12월의 인사 (Goodbye)", artist: "써니 (SUNNY), 정우 (JUNGWOO), 런쥔 (RENJUN)" },
  { title: "첫눈에 (Feat. YUNHWAY)", artist: "JT&MARCUS" },
  { title: "LIGHT", artist: "범진" },
  { title: "겨울동화", artist: "김재환" },
  { title: "12월 그날", artist: "케이윌" },
  { title: "눈꽃", artist: "지아" },
  { title: "12월 32일", artist: "서은광 (비투비)" },
  { title: "흰눈", artist: "먼데이 키즈 (Monday Kiz)" },
  { title: "I Wish", artist: "다비치" },
  { title: "그 겨울의 우리", artist: "빌리어코스티" },
  { title: "아리운", artist: "케이시 (Kassy)" },
  { title: "춥지 않도록 (Prod.공기남)", artist: "1ho, 0back, Daowl" },
  { title: "Ordinary Day", artist: "규현 (KYUHYUN), 온유 (ONEW), 태일 (TAEIL)" },
  { title: "눈이 오잖아(Feat.헤이즈)", artist: "이무진" },
  { title: "I Miss You (쿠키박스 X 산들)", artist: "산들" },
  { title: "비로소 아름다워", artist: "심규선 (Lucia)" },
  { title: "눈이 내리면", artist: "김용준, 김성규" },
  { title: "첫 눈 오는 날", artist: "유희" },
  { title: "마음이 내려 쌓이면", artist: "홍이삭" },
  { title: "겨울잠", artist: "아이유" }
  ];

function getRandomSongs(songs, count) {
  const shuffled = songs.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const Sen1 = () => {
  const randomSongs = getRandomSongs(songs, 5);

  return (
    <div>
      <h1 className='Sen1Title'>추운 겨울 눈 오는 날 생각나는 감성 발라드</h1>
      <div className='Recommend'>
      <div className='Recommend_Carousel' style={{ width: '50%', height: 'auto', objectFit:'cover' }}>
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100" src={저기창밖을봐눈이오잖아} alt="First slide" style={{width: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100" src={겨울잠} alt="Second slide" style={{ width: '100%', height: 'auto' }}
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100" src={겨울이오면} alt="Third slide" style={{width: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100" src={하얀거짓말} alt="Third slide" style={{width: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100" src={겨울이좋아졌어} alt="Third slide" style={{width: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
   
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='Recommend_Table'>
      <div className='Recommend_Text'>
        <NavLink to="/aespa/Drama">
        <h2> 저기 창 밖을 봐 눈이 오잖아</h2>
        <p> 박원 (feat. 폴킴)</p>
        </NavLink>
      </div>
      <div className='Recommend_Text'>
        <NavLink to="/LE SSERAFIM/PerfectNight">
        <h2> 겨울 잠</h2>
        <p> 아이유</p>
        </NavLink>
      </div>
      <div className='Recommend_Text'>
        <NavLink to="/QWER/Discord">
        <h2> 겨울이 오면</h2>
        <p> 하현상</p>
        </NavLink>
      </div>
      <div className='Recommend_Text'>
        <NavLink to="/TAEYEON/TO.X">
        <h2> 하얀거짓말</h2>
        <p> NCT 127</p>
        </NavLink>
      </div>
      <div className='Recommend_Text'>
        <NavLink to="/IVE/I AM">
        <h2> 겨울이 좋아졌어</h2>
        <p> 정승환</p>
        </NavLink>
      </div>
      </div>
      </div>
      
    <button className='More'>More Song</button>
    </div>
  
  );
}

export default Sen1;

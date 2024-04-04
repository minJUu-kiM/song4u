import YouTube from "react-youtube";
import '../styles/LOVEDIVE.css';
import { Link } from 'react-router-dom';

const LoveDive = () => {
  return (
    <div className="LOVEDIVE">
      <h1> LOVE DIVE </h1>
      <div className="LOVEDIVE_info">
        <div className="LOVEDIVE_video">
        <YouTube
          videoId="Y8JFxS1HlDo" //동영상 주소
          opts={{
            width: "100%",
            height: "420px",
            playerVars: {
            autoplay: 1, //자동 재생 여부 
            modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
            loop: 1, //반복 재생
            },
          }}
          onReady={(e) => {
            e.target.mute(); //소리 끔
          }}
          />
          </div>
        <div className="LOVEDIVE_text">
          <h3>LOVE DIVE - LOVE DIVE</h3>
          <h4 className="LOVEDIVE_aespa">IVE</h4>
          <div className="LOVEDIVE_info_text">
            <div className="LOVEDIVE_info1">
              <p>Release Date</p>
              <p>Genre</p>
              <p>Agency</p>
            </div>
            <div className="LOVEDIVE_info2">
              <p>2022.04.05</p>
              <p>Dance</p>
              <p>StarShip Entertainment</p>  
            </div>
          </div>
        </div>
        </div>
      <div className="LOVEDIVE_Recommend">
        <h1>Recommend</h1>
        <div className="LOVEDIVE_Recommend_music">
        <Link to="/Ditto">
        <p>🎵Ditto-NewJeans</p>
        </Link>
        <p>🎵ASAP-StayC</p>
        <p>🎵LOVEme-Bio</p>
        <p>🎵FAKELOVE-BTS</p>
        <p>🎵LoveMeLikeThis-NMiXX</p>
        </div>
      </div>
    </div>
  )
}

export default LoveDive;
import YouTube from "react-youtube";
import '../styles/Ditto.css';
import { Link } from 'react-router-dom';


const Ditto = () => {
  return (
    <div className="Ditto">
      <h1> Ditto </h1>
      <div className="Ditto_info">
        <div className="Ditto_video">
        <YouTube
          videoId="Km71Rr9K-Bw" //동영상 주소
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
        <div className="Ditto_text">
          <h3>Ditto - NewJeans 'OMG'</h3>
          <h4 className="Ditto_NewJeans">NewJeans</h4>
          <div className="Ditto_info_text">
            <div className="Ditto_info1">
              <p>Release Date</p>
              <p>Genre</p>
              <p>Agency</p>
            </div>
            <div className="Ditto_info2">
              <p>2022.12.19</p>
              <p>Dance</p>
              <p>HYBE Entertainment</p>  
            </div>
          </div>
        </div>
        </div>
      <div className="Ditto_Recommend">
        <h1>Recommend</h1>
        <div className="Ditto_Recommend_music">
        <Link to="/Ditto">
        <p>🎵Butter-BTS</p>
        </Link>
        <p>🎵DM - promis9</p>
        <p>🎵Dejavu - LEE YOUNGJI</p>
        <p>🎵Life' Too Short(English Ver.) - aespa</p>
        <p>🎵U GOT IT(X1 ver.) - X1</p>
        </div>
      </div>
    </div>
  )
}

export default Ditto;
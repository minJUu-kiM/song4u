import YouTube from "react-youtube";
import '../styles/Drama.css';

const Drama = () => {
  return (
    <div className="Drama">
      <h1> Drama </h1>
      <div className="Drama_info">
        <div className="Drama_video">
        <YouTube
          videoId="D8VEhcPeSlc" //동영상 주소
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
        <div className="Drama_text">
          <h3>Drama - The 4th Mini Album</h3>
          <h4 className="Drama_aespa">aespa</h4>
          <div className="Drama_info_text">
            <div className="Drama_info1">
              <p>Release Date</p>
              <p>Genre</p>
              <p>Publisher</p>
              <p>Agency</p>
            </div>
            <div className="Drama_info2">
              <p>2023.11.10</p>
              <p>Dance, Ballad</p>
              <p>Kakao Entertainment</p>
              <p>SM Entertainment</p>  
            </div>
          </div>
        </div>
        </div>
      <div className="Drama_Recommend">
        <h1>Recommend</h1>
        <div className="Drama_Recommend_music">
        <p>🎵You&Me-JENNIE</p>
        <p>🎵Chill Kill-Red Velvet</p>
        <p>🎵Baddie-IVE</p>
        <p>🎵MANIAC-VIVIZ</p>
        <p>🎵ETA-NewJeans</p>
        </div>
      </div>
    </div>
  )
}

export default Drama;
import '../styles/MonthYear.css'

const January2023 = () => {
  const SongRanking = [
    {id:1, title: 'Ditto', artist: 'NewJeans'},
    {id: 2, 	title: 'VVS (Feat. JUSTHIS) (Prod. GroovyRoom)',	artist: '미란이 (Mirani)'},
    {id: 3, 	title: 'OMG',	artist: 'NewJeans'},
  {id: 4, 	title: 'Hype Boy',	artist: 'NewJeans'},
  {id: 5, 	title: '사건의 지평선',	artist: '윤하 (YOUNHA)'},
  {id: 6,   title: 'ANTIFRAGILE',	artist: 'LE SSERAFIM (르세라핌)'},
  {id: 7, 	title: 'NOT SORRYFeat. pH-1) (Prod. by Slom)',	artist: '이영지'},
  {id: 8, 	title: 'Attention',	artist: 'NewJeans'},
  {id: 9, 	title: 'After LIKE',	artist: 'IVE (아이브)'},
  {id: 10, 	title: 'Candy',	artist: 'NCT DREAM'}
  ];


  return(
    <div>
    <h1 className="MonthYear">January 2023</h1>
    <ol className="MonthYearRank">
        {SongRanking.map((song, index) => (
          <li key={index}>
            {` Title: ${song.title}, Artist: ${song.artist}`}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default January2023
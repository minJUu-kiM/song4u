import '../styles/Genre.css'

const Genre = () =>{
    return(
        <div>
            <h1 className='Genre_Title'>Genre</h1>
            <table className="Genre_Table">
              <tr>
                <td className='Genre_td'>R&B Soul</td>
                <td className='Genre_td'>Dance</td>
                <td className='Genre_td'>Drama</td>
              </tr>
              <tr>
                <td className='Genre_td'>Rap & HipHop</td>
                <td className='Genre_td'>Rock & Metal</td>
                <td className='Genre_td'>Ballad</td>
              </tr>
              <tr>
                <td className='Genre_td'>Indi</td>
                <td className='Genre_td'>Movie</td>
                <td className='Genre_td'>ect</td>
              </tr>
            </table>
        </div>
    )
}

export default Genre;
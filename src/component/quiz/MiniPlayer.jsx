import './static/miniPlayer.css'
import photo from '../../assets/img/signin-img.svg'

const MiniPlayer = () => {
  return (
    <div className="miniPlayer floatingBtn">
          <span className="material-icons open"> play_circle_filled </span>
          <span className="material-icons close"> close </span>
          <img src={photo} alt="photo" />
          
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
  )
}

export default MiniPlayer
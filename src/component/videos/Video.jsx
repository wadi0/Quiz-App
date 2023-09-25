import './static/videos.scss'
import thumb from '../../assets/img/thumb.png'
// import { Link } from 'react-router-dom'

export const Video = () => {
  return (
        // <Link  className='link'>
            <div className="video">
                <img src={thumb} alt="vidoe title" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="qmeta">
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        // </Link>
  )
}

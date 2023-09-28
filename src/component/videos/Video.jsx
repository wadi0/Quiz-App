import './static/videos.scss'
import thumb from '../../assets/img/thumb.png'
// import { Link } from 'react-router-dom'

export const Video = ({title, id, noq}) => {
  return (
        // <Link  className='link'>
            <div className="video">
                <img src={thumb} alt={title} />
                {/* <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      /> */}
                <p>{title}</p>
                <div className="qmeta">
                    <p>{noq} Questions</p>
                    <p>Score : {noq * 5}</p>
                </div>
            </div>
        // </Link>
  )
}

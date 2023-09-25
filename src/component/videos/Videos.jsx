import { Link } from 'react-router-dom'
import { Video } from './Video'
import './static/videos.scss'

const Videos = () => {
  return (
    <div className="videos">
      <Link to='/quiz' > <Video /> </Link>
      <Link to='/quiz' > <Video /> </Link>
      <Link to='/quiz' > <Video /> </Link>
      <Link to='/quiz' > <Video /> </Link>
      <Link to='/quiz' > <Video /> </Link>
      <Link to='/quiz' > <Video /> </Link>
      <Link to='/quiz' > <Video /> </Link>
    </div>
  )
}

export default Videos

// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './static/progressBar.css'

const ProgressBar = () => {
  return (
    <div className="progressBar">
          <div className="backButton">
            <span className="material-icons"> arrow_back_ios </span>
          </div>
          <div className="rangeArea">
            <div className="tooltip">24% Complete!</div>
            <div className="rangeBody">
              <div className="progress" style={{width: '20%'}}></div>
            </div>
          </div>
          <Link to='/result' className='link'>
            <button className="next">
              <span>Next Question</span>
              <span className="material-icons"> arrow_forward_ios </span>
            </button>
          </Link>
        </div>
  )
}

export default ProgressBar


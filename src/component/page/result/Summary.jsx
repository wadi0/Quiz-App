import './static/result.scss'
import success from '../../../assets/img/success.jpg'


const Summary = () => {
  return (
    <div className='summary'>
        <div className="point">
            <p className="score">
                Your score is <br/> 5 out of 10
            </p>
        </div>

        <div className="badge">
            <img src={success} alt="photo" />
        </div>
    </div>
  )
}

export default Summary
import Answers from "./Answers"
import MiniPlayer from "./MiniPlayer"
import ProgressBar from "./ProgressBar"


const Quiz = () => {
  return (
    <div style={{width: '90%', margin: 'auto'}}>
    <h1 style={{fontWeight: '600', color: 'grey'}}>Pick three of your favorite Star Wars Flims</h1>
    <h4 style={{marginTop: '8px', color: 'grey'}}>Question can have multiple answers</h4>
    <Answers />
    <ProgressBar />
    <MiniPlayer />
    </div>
  )
}

export default Quiz
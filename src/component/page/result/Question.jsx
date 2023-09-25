import Answers from "./Answers";
import './static/result.scss'

const Question = () => {
  return (
    <div className="question">
            <div className="qtitle">
              <span className="material-icons-outlined"> help_outline </span>
              Here goes the question from Learn with Sumit?
            </div>
            {/* <div className="answers">
              <label className="answer" htmlFor="option1"> A New Hope 1 </label>

              <label className="answer" htmlFor="option2"> A New Hope 1 </label>

              <label className="answer" htmlFor="option3"> A New Hope 1 </label>

              <label className="answer wrong" htmlFor="option4"> <span>A New Hope 1</span><span>Your answer</span> </label>

              <label className="answer" htmlFor="option5"> A New Hope 1 </label>

              <label className="answer" htmlFor="option6"> A New Hope 1 </label>

              <label className="answer correct" htmlFor="option7"> <span>A New Hope 1</span><span>Correct answer</span> </label>

              <label className="answer" htmlFor="option8"> A New Hope 1 </label>

              <label className="answer" htmlFor="option9"> A New Hope 1 </label>

              <label className="answer" htmlFor="option10"> A New Hope 1 </label>
            </div> */}
            <Answers />
          </div>
  )
}

export default Question
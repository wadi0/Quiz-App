import "./static/customInput.scss"

export const CustomInput = ({ icon, ...rest }) => {
  return (
    <div className="textInput">
        <input {...rest} />
        <span className="material-icons"> {icon} </span>
    </div>
  )
}

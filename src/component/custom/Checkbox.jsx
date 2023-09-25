import'./static/checkbox.scss'

const Checkbox = ({className, text, textClass, ...rest}) => {
  return (
    <label className={className}>
        <input type="checkbox" {...rest} />
        <span className={textClass}>{text}</span>
    </label>
  )
}

export default Checkbox
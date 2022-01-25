import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => {
    return (
  <button 
    style={buttonStyle} 
    className='btn'
    onClick={onClick}
    > 
    {text} 
  </button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

const buttonStyle = {
    backgroundColor: 'green'
}


export default Button
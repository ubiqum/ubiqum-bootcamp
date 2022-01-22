import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = () => {
    console.log('clicked button')
  } 

  return (
    <header className='header'>
      <h1 style={headingStyle}>{title}</h1>
      <Button text='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

// CSS in JS
const headingStyle = {
    //color: 'red', 
    //backgroundColor: 'black' 
}

export default Header

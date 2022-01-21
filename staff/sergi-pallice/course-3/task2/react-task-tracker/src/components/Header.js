const Header = ({title}) => {
  return (
    <header className='header'>
      <h1 style={headingStyle}>{title}</h1>
      <button className='btn'>Add</button>
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker"
}

// CSS in JS
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black' 
}

export default Header

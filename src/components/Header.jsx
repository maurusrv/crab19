import Greeting from './Greeting'


const ulStyle = {
  display: 'flex',
  // flexDirection: 'column',
  border: '1px solid black',
}

const liStyle = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  listStyleType: 'none',
  border: '1px solid black',
}

const Header = (props) => {
  // console.log('Header props:', props)
  const { username } = props

  let isHidden = false

  // setTimeout(() => {
  //   isHidden = true
  // }, 5000)

  return (
    <header>
      <ul style={ulStyle} id="navlinks">
        <li style={liStyle}>Home</li>
        <li style={liStyle}>About</li>
        <li style={liStyle}>Contact Us</li>
        <li style={liStyle}>
          <Greeting 
            name={username} 
            isHidden={isHidden}
          />
        </li>
      </ul>
    </header>
  )
}

export default Header



const style = {
  display: 'flex',
  justifyContent: 'space-between'
}

const Header = () => {
  return (
    <header>
      <ul style={style} id="navlinks">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </header>
  )
}

export default Header

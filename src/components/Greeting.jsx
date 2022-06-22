
const GreetingText = () => 'Hello'

const Greeting = (props) => {
  console.log('Greeting props:', props)

  const { name, isHidden } = props

  if (isHidden) {
    return null
  }

  return (
    <h3><GreetingText />, {name}!</h3> // or {prop.username}
  )
}

export default Greeting


const GreetingText = () => 'Hello'

const Greeting = (props) => {
  console.log('Greeting props:', props)

  const { text, isHidden } = props

  if (isHidden) {
    return null
  }

  return (
    <h3><GreetingText />, {text}!</h3> // or {prop.username}
  )
}

export default Greeting

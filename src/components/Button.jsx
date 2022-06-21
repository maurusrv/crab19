

const Button = () => {

  const onButtonClick = () => console.log('I am clicked!')

  return (
    <button onClick={onButtonClick}>Click Me!</button>
  )
}

export default Button

import { useEffect, useState } from 'react'

const Form = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isFormShown, setIsFormShown] = useState(false)
  const [isProcessed, setIsProcessed] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => { // as side effect
    if (!isProcessed && isProcessed !== null) {
      setIsSubmitting(true)
      console.log('Submitting...')
      setTimeout(() => {
        // console.log({
        //   username,
        //   password,
        // })
        console.log('Submitted.')
        setIsSubmitting(false)
      }, 5000)
    } 
    // else {
    //  
    // }
  }, [isProcessed])
  

  const onFormSubmit = (e) => { // as event handle
    e.preventDefault()
    // some other expensive processing
    setIsProcessed(true)
    setTimeout(() => {
      console.log('Processing...')
      setIsProcessed(false)
    }, 10000)

    // setTimeout(() => {
    //   console.log({
    //     username,
    //     password,
    //   })
    //   setIsSubmitting(false)
    // }, 5000)
  }

  const onLoginAgainClick = () => setIsProcessed(null)

  const onToggleForm = () => setIsFormShown(!isFormShown)

  const onUsernameChange = (e) => setUsername(e.target.value)
  const onPasswordChange = (e) => setPassword(e.target.value)

  if (isProcessed === true) {
    return (
      <div>Processing ...</div>
    )
  } 
  
  if (isSubmitting) {
    return (
      <div>Submitting ...</div>
    )
  }

  
  if (isProcessed === false) { // !isProcessed
    return (
      <div>Submission Successful. <button onClick={onLoginAgainClick}>Login again.</button></div>
    )
  }

  if (isProcessed === null) {
    return (
      <form onSubmit={onFormSubmit}>
        <button type="button" onClick={onToggleForm}>Show Form</button>
        {isFormShown && (
          <>
            <div>
              <label>username</label>
              <input type="text" value={username} onChange={onUsernameChange}/>
            </div>
            <div>
              <label>password</label>
              <input type="password" value={password} onChange={onPasswordChange} />
            </div>
            <button type="submit">Submit</button>
          </>
        )}
      </form>
    )
  }

  return null
}

export default Form
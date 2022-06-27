import { useEffect, useState } from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(() => {
    console.log('Functional Component constructs count.')
    return 0
  });

  //functionCall(callback, array)
  useEffect(() => {
    console.log("Functional Component is rendered.");
  });

  useEffect(() => {
    console.log("Functional Component is mounted.");

    function unMount() {
      console.log('Functional Component is unmounted.')
    }
    return unMount
  }, [])

  useEffect(() => {
    if (count > 0) { // this just indicates that we trigger state change
      console.log('Functional Component is updated because of count.')
    }


    if (count % 2 === 0) {
      console.log('Count is even now.')
    } else {
      console.log('Count is odd now.')
    }
  }, [count])

  const onIncrement = () => {
    setCount(count => {
      if (count % 2 === 0) {
        console.log('Count is a while ago.')
      } else {
        console.log('Count is a while ago.')
      }
      return count + 1
    })
  }

  

  return (
    <span style={{ color: "green", fontSize: 50 }}>
      {count}
      <button onClick={onIncrement}>+</button>
    </span>
  )
}

export default FunctionalComponent;

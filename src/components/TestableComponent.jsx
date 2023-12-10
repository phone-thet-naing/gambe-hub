import { useState } from 'react'

const TestableComponent = () => {
  const [show, setShow] = useState(false)
  
  return (
    <>
      { show && <h1>Hi</h1> }
      <button onClick={() => setShow(true)}>Click Me</button>
    </>
  )
}

export default TestableComponent
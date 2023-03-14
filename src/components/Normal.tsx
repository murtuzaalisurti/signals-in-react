import {useRef, useState} from 'react'

const Normal = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='comp-contain'>
        <h3>Normal counter implementation in React</h3>
        <p>{count}</p>
        <div className="controls">
            <button onClick={() => setCount(count => count + 1)}>+</button>
            <button onClick={() => setCount(count => count - 1)}>-</button>
        </div>
    </div>
  )
}

export default Normal
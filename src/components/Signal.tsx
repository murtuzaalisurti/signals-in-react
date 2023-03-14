import { useRef } from 'react'

const Signal = () => {
    const count = useRef(0)
    const displayRef = useRef<HTMLParagraphElement>(null)

    return (
        <div className='comp-contain'>
            <h3>Signal counter implementation in React</h3>
            <p ref={displayRef}>
                {count.current}
            </p>
            <div className='controls'>
                <button onClick={
                    () => {
                        count.current = count.current + 1;
                        displayRef.current && (displayRef.current.innerText = `${count.current}`);
                    }
                }>+</button>
                <button onClick={() => {
                    count.current = count.current - 1;
                    displayRef.current && (displayRef.current.innerText = `${count.current}`);
                }}>-</button>
            </div>
        </div>
    )
}

export default Signal
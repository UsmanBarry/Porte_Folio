import { React, useState } from 'react'

const Compteur = () => {
    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    }

    const decNum = () => {

        setNum(num - 1);

    }
    const res = () => {
        setNum(0);
    }
    return (
        <div className='container'>
            <div>
                <h1> {num} </h1>
                <button onClick={decNum} className='btn'>-</button>
                <button onClick={res} className='btn'>Reset</button>
                <button onClick={incNum} className='btn'>+</button>
            </div>
        </div>
    )
}

export default Compteur



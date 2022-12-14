import { React } from 'react'
import { useState } from 'react';
const Inverseur = () => {
    const [Str, setStr] = useState('');
    const [StrBlank, setStrBlank] = useState(false);

    const newstr = (e) => {
        const strings = e.target.value;

        if (strings.length > 9) {
            setStrBlank(true);
            return
        }
        if (strings === '') {
            setStr('');
            return

        }

        let text = '';
        for (let i = strings.length - 1; i >= 0; i--) {
            text += strings[i]
        }
        setStr(text);
        setStrBlank(false);
    }



    return (
        <div className='container'>
            <h1>Inverseur de String </h1>
            <div className='answer'>
                {Str}
            </div>
            <div>
                <form>
                    <input type="text" id="Str" onChange={newstr} className="ajout" />
                    {
                        StrBlank ? <div className='error'>
                            Attention, Vous devez pas depasser 9 lettres
                        </div> : <div> </div>
                    }
                </form>
            </div>
        </div>
    )
}

export default Inverseur





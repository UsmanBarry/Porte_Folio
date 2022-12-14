import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const Element = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const onBack = () => {
        navigate('/')

    }
    return (
        <div className='container'> Page d'acceuil {id}
            <div className='menu-item' onClick={onBack}> Retour en arriere </div>


        </div>
    )
}


export default Element

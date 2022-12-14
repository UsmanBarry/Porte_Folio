import React from 'react'
import { Link } from 'react-router-dom';
//import Compteur from '../components/compteur';


const MainMenu = () => {
    return (
        <div className='container'>
            <li className='menu-item'>
                <Link className='link' to={'/compteur'}>  Page 1 </Link>
            </li>
            <li className='menu-item'>
                <Link className='link' to={'/Inverseur'}> Page 2</Link>
            </li>


        </div>
    )
}

export default MainMenu

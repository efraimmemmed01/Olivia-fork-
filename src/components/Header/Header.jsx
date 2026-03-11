import React from 'react'

import nav from '../../assets/Photo/nav.png';
import img6 from '../../assets/Photo/microsoft.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Form from '../Form/Form';

const Header = () => {
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
    setShowForm(!showForm);
};
        

    return (
        <header className=' w-[100%]'>
            <img className='w-[100%]' src={nav} alt="Navigation" />
            <div className=' w-[80%] flex items-center justify-center mr-69! ml-29! mb-5!'>
                <ul className='w-[100%] flex items-center text-black flex-4 gap-3'>
                    <li className='flex items-end'> <FontAwesomeIcon icon={faShop} />Mağazalar</li>
                    <li>Korporativ satışlar</li>
                </ul>
                <div className='text-black'> <FontAwesomeIcon icon={faChevronDown} /></div>
            </div>


            <nav className='w-[100%]  flex items-center justify-center gap-10'>
                <h1 className='text-purple-700 text-3xl'>Olivia</h1>
                <div className='w-33 gap-2 flex items-center justify-center text-[20px] text-white bg-purple-600'> <img className='w-6' src={img6} alt="" />Kataloq</div>
                <input className='border-black border-2 text-black w-[600px] h-[40px]' type="Axtarış..." placeholder='Axtarış' />
                <div className='flex w-70 gap-2'>
                    <div onClick={toggleForm} className='flex flex-col'><FontAwesomeIcon icon="fa-regular fa-circle-user" className='text-black' />Daxil ol
                    </div>

                    <div className='flex flex-col'><FontAwesomeIcon icon="fa-regular fa-heart" className='text-black' /> Seçilmişlər</div>
                    <div className='flex flex-col'><FontAwesomeIcon icon={faCartShopping} style={{ color: "rgb(30, 48, 80)", }} />Səbət</div>
            
                
                </div>
               {showForm && <Form />}

            </nav>
            <div className='flex items-center justify-between w-[100%] '>
                <ul className='flex items-center justify-start gap-5 w-[80%] mr-59! ml-29! mb-2! mt-3!'>
                    <li className='text-purple-900'><FontAwesomeIcon icon={faStar} style={{ color: "rgb(202, 3, 252)", }} /> Kampaniya</li>
                    <li>Brendlər</li>
                </ul>
            </div>
        </header>

    )
}

export default Header
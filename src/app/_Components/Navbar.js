import React from 'react'
import styles from "../page.module.css"





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import nav from "../Styles/navbar.module.css"
function Navbar() {
    return (
        <div>


            <nav className='bg-custom-gray w-full h-16'>

                <div className='container  px-5 text-white flex justify-between items-center'>
                    <div className='brand'>

                        <div className={styles.brand}>
                            <Link href="/">
                                <img
                                    className={styles.logo}
                                    src="https://extrapolate.b-cdn.net/Asset/logo/extrapolate-white-red.png"
                                    alt="BrandLogo"
                                    width="100%"
                                />
                            </Link>

                        </div>
                    </div>
                    <div>

                        <ul className={`${nav.listdata} flex space-x-5 text-xs`}>
                            <li className="flex justify-center p-3 items-center space-x-1 hover:bg-red-500 transition-colors duration-100">
                                <FontAwesomeIcon icon={faPhone} className="text-white size-3" />
                                <a href="/">888-328-2189</a>
                            </li>
                            <li className='hover:bg-red-500 p-3 transition-colors duration-100'><a href='/'>ABOUT US</a></li>
                            <li className='hover:bg-red-500 p-3 transition-colors duration-100'><a href='/contact'>CONTACT-US</a></li>
                            <li className='hover:bg-red-500 p-3 transition-colors duration-100'><Link href='/signUp'>SIGN IN </Link></li>
                        </ul>
                    </div>
                </div>

            </nav>

            <nav className='bg-black w-full h-12 py-2'>
                <div className='container text-white flex justify-between items-center'>
                    <div className='container'>
                        < ul className='flex space-x-5 text-xs'>
                            <li className="flex items-center">
                                INDUSTRIES
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </li>

                            <li className="inline-flex items-center">BLOGS</li>
                        </ul>
                    </div>

                    <div className={`${nav.search} w-full max-w-md flex mx-auto`}>
                        <input
                            type="text"
                            placeholder="Search for the Reports..."
                            className="w-full h-8 py-2 border border-gray-300 mx-auto shadow-sm text-gray-900"
                        />
                        <button className="h-8 w-10 flex justify-center items-center bg-red-600">
                            <FontAwesomeIcon icon={faSearch} className="text-white size-4" />
                        </button>
                    </div> 
                    </div>






            </nav>
        </div>
    )
}

export default Navbar
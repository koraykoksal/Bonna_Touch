import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { lightIcon,darkIcon } from '../helper/themeIcon'
import { StyleButton } from './NavBar.style'

export const NavBar = () => {

    const {myTheme,setmyTheme}=useContext(ThemeContext)

    const handleChangeSyle=()=>{

        setmyTheme(prev=>(prev==="light" ? "dark":"light"))

    }

  return (

    
    <nav className=" dark:bg-gray-900 p-3">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <div className='flex items-center'>
        <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap ">
            Bonna Touch
        </span>
        </div>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">

        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li>
            <StyleButton onClick={handleChangeSyle}>
                {myTheme==="light"?lightIcon:darkIcon}
            </StyleButton>
            </li>
            
            

            <li>
            <Link
                className="navsLink bblock py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
                to="/"
            >
                Home
            </Link>

            </li>
            <li>
            <Link
                className="navsLink block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                to="/history"
            >
                History
            </Link>
            </li>
            <li>
            <Link
                className="navsLink block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                to="/login"
            >
                Sign in
            </Link>
            </li>
            <li>
            <Link
                className="navsLink block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                to="/register"
            >
                Sign up
            </Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>



  )
}

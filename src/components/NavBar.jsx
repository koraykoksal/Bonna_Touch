import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { lightIcon,darkIcon } from '../helper/themeIcon'
import { StyleButton } from './NavBar.style'
import bonnaLogo from '../assets/img/bonnaTouchLogo.png'
import touchLogo from '../assets/img/TouchLogo.svg'


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
            src={bonnaLogo}
            className="h-[6rem] mr-3 bonnaLogo hover:cursor-pointer"
            alt="Bonna Touch"
            onClick={()=>window.open('https://www.bonna.com.tr','_blank')}
        />
        </div>

        

        <div className="hamburger_ul w-full md:block md:w-auto">

   

            <ul className=" navs_ul font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">

            <li>
            <StyleButton onClick={handleChangeSyle}>
                {myTheme==="light"?lightIcon:darkIcon}
            </StyleButton>
            </li>
            
            

            <li>
            <Link
                className="navsLink bblock py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
                to="/"
            >
                Home
            </Link>

            </li>
            <li>
            <Link
                className="navsLink block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                to="/history"
            >
                History
            </Link>
            </li>
            <li>
            <Link
                className="navsLink block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                to="/login"
            >
                Sign in
            </Link>
            </li>
            <li>
            <Link
                className="navsLink block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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

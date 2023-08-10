import React from 'react'

export const test = () => {

  const {myTheme,setmyTheme}=useContext(ThemeContext)

  const handleChangeSyle=()=>{

      setmyTheme(prev=>(prev==="light" ? "dark":"light"))

  }

  return (

    // <nav className=" dark:bg-gray-900 p-3">
    // <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    //     <div className='flex items-center'>
    //     <img
    //         src="https://flowbite.com/docs/images/logo.svg"
    //         className="h-8 mr-3"
    //         alt="Flowbite Logo"
    //     />
    //     <span className="self-center text-xl font-semibold whitespace-nowrap ">
    //         Bonna Touch
    //     </span>
    //     </div>

    //     <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
    //     <span class="sr-only">Open main menu</span>
    //     <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
    //     </svg>
    //     </button>

    //     <div className="hidden w-full md:block md:w-auto" id="navbar-default">

    //     <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">

    //         <li>
    //         <StyleButton onClick={handleChangeSyle}>
    //             {myTheme==="light"?lightIcon:darkIcon}
    //         </StyleButton>
    //         </li>
            
            

    //         <li>
    //         <Link
    //             className="navsLink bblock py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             aria-current="page"
    //             to="/"
    //         >
    //             Home
    //         </Link>

    //         </li>
    //         <li>
    //         <Link
    //             className="navsLink block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             to="/history"
    //         >
    //             History
    //         </Link>
    //         </li>
    //         <li>
    //         <Link
    //             className="navsLink block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             to="/login"
    //         >
    //             Sign in
    //         </Link>
    //         </li>
    //         <li>
    //         <Link
    //             className="navsLink block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             to="/register"
    //         >
    //             Sign up
    //         </Link>
    //         </li>
    //     </ul>
    //     </div>
    // </div>
    // </nav>


  )
}

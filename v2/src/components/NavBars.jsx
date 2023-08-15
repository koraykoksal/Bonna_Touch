import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import bonnaLogo from '../assets/img/bonnaTouchLogoW.png'
import { Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Home', url: '/', current: true },
  { name: 'History', url: '/history', current: false },
  { name: 'Login', url: '/login', current: false },
  { name: 'Register', url: '/register', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBars() {

    const navigate=useNavigate()

  return (

    <Disclosure as="nav" className="bg-gray-500">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              
              

                <div className=" flex-shrink-0 hidden sm:ml-6 sm:block">
                <img
                    className=" h-[90px] w-auto hover:cursor-pointer "
                    src={bonnaLogo}
                    alt="Your Company"
                    onClick={()=>window.open('https://bonna.com.tr')}
                />
                
                {/* <h1 className='text-red-600 text-2xl'>Bonna Touch</h1> */}
                  
                </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item,i) => (
                      // <Link
                      //   key={i}
                      //   to={item.url}
                      //   className='focus:bg-gray-900 text-white  hover:bg-gray-700 hover:text-white
                      //     rounded-md px-3 py-2 text-sm font-medium'
                      // >
                      //   {item.name}
                      // </Link>

                      <NavLink key={i} to={item.url} color='#ffff' style={({ isActive }) => ({ color: isActive ? "#000000" :"#FFFFFF",padding:"0.3rem",backgroundColor:isActive ? "#8c837d":"",borderRadius:'0.5rem'})}>
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>

              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">

                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}

              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item,i) => (
                <Disclosure.Button 
                  key={i}
                  onClick={()=>navigate(item.url)}
                //   to={item.url}
                  className='focus:bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium hover:cursor-pointer'
                >
                  {item.name}
                </Disclosure.Button>
                // <Link key={i} to={item.url} className='focus:bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium hover:cursor-pointer'>
                //     {item.name}
                //     </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>


  )
}
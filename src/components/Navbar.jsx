import React from 'react'
import { AiFillDribbbleCircle } from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto h-24 flex flex-row justify-between items-center'>
        {/* Вариант 1 */}
        <div>
          <AiFillDribbbleCircle size={40} className='transition-all ease-in-out duration300 hover:text-neutral-600 cursor-pointer'/>
        </div>
        <ul className='flex'>
          <li className='cursor-pointer transition-all ease-in-out duration300'>Home</li>
          <li className='cursor-pointer transition-all ease-in-out duration300'>About</li>
          <li className='cursor-pointer transition-all ease-in-out duration300'>Pricing</li>
          <li className='cursor-pointer transition-all ease-in-out duration300'>Contact</li>
        </ul>

        {/* Вариант 2 */}
        {/* <div>
          <BsSearch size={40} className='transition-all ease-in-out duration300 hover:text-neutral-600 cursor-pointer'/>
        </div>
          <ul className='flex'>
            <li className='cursor-pointer transition-all ease-in-out duration300'>Home</li>
            <li className='cursor-pointer transition-all ease-in-out duration300'>About</li>
            <li className='cursor-pointer transition-all ease-in-out duration300'>Pricing</li>
            <li className='cursor-pointer transition-all ease-in-out duration300'>Contact</li>
          </ul>
        <div>
          <AiFillDribbbleCircle size={40} className='transition-all ease-in-out duration300 hover:text-neutral-600 cursor-pointer'/>
        </div> */}

        {/* Вариант 3 */}
        {/* <div>
          <AiFillDribbbleCircle size={40} className='transition-all ease-in-out duration300 hover:text-neutral-600 cursor-pointer'/>
        </div>
          <ul className='flex items-center'>
            <li className='cursor-pointer transition-all ease-in-out duration300'>Home</li>
            <li className='cursor-pointer transition-all ease-in-out duration300'>About</li>
            <li className='cursor-pointer transition-all ease-in-out duration300'>Pricing</li>
            <li className='cursor-pointer transition-all ease-in-out duration300'>Contact</li>
            <div className='pl-2'>
              <BsSearch size={40} className='transition-all ease-in-out duration300 hover:text-neutral-600 cursor-pointer'/>
            </div>
          </ul> */}

      </div>
    </div>
  )
}

export default Navbar
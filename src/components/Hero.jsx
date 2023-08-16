import React from 'react'
import image from '../assets/hero.png'
import { IoMdBasketball } from 'react-icons/io'
import { BsArrowDownRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] pt-20 mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center gap-8'>
          <h1 className='font-roboto tracking-tighter font-bold text-6xl md:text-8xl md:text-left text-center'>Ready for game.</h1>
          <p>Get your best quality basketball and play like a NBA player. <br className=' hidden md:block'/> <span className='text-orange-700 font-semibold'>Get 2 pay 1 only till Friday.</span></p>
          <div className='flex flex-col gap-2'>
            <a href="" className="w-[40%] gap-2 flex flex-row justify-center items-center p-4 font-bold text-white bg-orange-600 hover:bg-orange-700 ease-in-out transition-all text-center font-roboto">
              <IoMdBasketball size={20} className='text-white'/> Get it now
            </a>
            <a href="" className='w-[40%] gap-2 flex flex-row justify-center items-center p-4 font-bolt font-roboto text-black border-black border-2 bg-white font-bold transition-all ease-in-out hover:bg-black hover:text-white'>
              <BsArrowDownRight size={20} className='hover:text-white'/> View other models
            </a>
          </div>
        </div>
        {/* Image */}
        <img src={image} alt="/" />
      </div>
    </div>
  )
}

export default Hero
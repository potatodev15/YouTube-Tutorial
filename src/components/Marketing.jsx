import React from 'react'
import bgimage from '../assets/4.jpeg'

const Marketing = () => {
  return (
    <div className='w-full h-screen'>
        <div className='hidden md:block absolute top-[780px] right-10'>
            <img src={bgimage} alt="basketball" className='w-[600px] z-[-1] opacity-[0.3]'/>
        </div>
        <div className='max-w-[1240px] pt-[8rem] mx-auto gap-8 flex flex-col justify-center items-center text-center font-roboto'>
            <h1 className='text-4xl font-semibold z-[1]'>Why you <span className='text-orange-600'>should</span> choose us</h1>
            <div className='z-[1] grid md:grid-cols-3 md:pt-10 gap-14'>
                <div className='w-[300px] h-[300px] gap-10 flex flex-col justify-center items-center bg-gray-100'>
                    <h6 className='text-[20px]'>Experience</h6>
                    <h1 className='text-6xl text-orange-600 font-bold'>10+</h1>
                    <p className='text-[16px]'>years</p>
                </div>
                <div className='w-[300px] h-[300px] gap-10 flex flex-col justify-center items-center bg-gray-100'>
                    <h6 className='text-[20px]'>Clients</h6>
                    <h1 className='text-6xl text-orange-600 font-bold'>5k</h1>
                    <p className='text-[16px]'>well served</p>
                </div>
                <div className='w-[300px] h-[300px] gap-10 flex flex-col justify-center items-center bg-gray-100'>
                    <h6 className='text-[20px]'>Quality</h6>
                    <h1 className='text-6xl text-orange-600 font-bold'>100%</h1>
                    <p className='text-[16px]'>well made</p>
                </div>
            </div>
            <p className='max-w-[800px] pt-8 text-[12px] md:text-[16px] font-roboto font-lignt text-center'>The best quality basketballs. We have a rich repertoire of leather, rubber, composite. Quality ranges from amateur to collectible. You just play in your spare time or you train and want to become a pro. Here you can find balls for everyone. From 5th to 7th number.</p>
        </div>
    </div>
  )
}

export default Marketing
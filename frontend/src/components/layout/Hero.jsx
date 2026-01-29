import React from 'react'
import hero from "../../assets/hero.jpg"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
   <section className='relative'>
    <img src={hero} alt="" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover' />
    <div className='absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center'>
        <div className='text-center text-white p-6'>
            <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>Vacation <br /> ready</h1>
            <p className='text-sm tracking-tighter mdLtext-lg mb-6 '>Explore Our Vacation Ready Outfits With Fast WorldWide Shipping </p>
            <Link to="#" className='bg-white text-gray-950 p-6 py-2 rounded-sm text-lg'>Shop Now</Link>
        </div>
    </div>
   </section>
  )
}

export default Hero
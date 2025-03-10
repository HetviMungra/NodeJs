import React from 'react'
import { assets } from '../assets/assets'

export default function OurPolicy() {
  return (
    <div>
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
            <div>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'> Easy Exachange policy</p>
                <p className='text-gray-400'>We offer hassle free exchange policy</p>
            </div>

            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'> Day Return policy</p>
                <p className='text-gray-400'>We Provide 7 day free return policy</p>
            </div>

            <div>
                <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'> Best custumer support</p>
                <p className='text-gray-400'>We provide 24/7 custumer support </p>
            </div>
        </div>
    </div>
  )
}

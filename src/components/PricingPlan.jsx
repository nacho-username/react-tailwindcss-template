import { useContext, useEffect, useState } from 'react'
import TotalPriceContext from '../context/TotalPriceContext'
import {
  calculateCampsitePricing,
  getDiscountedAmount,
} from '../utilities/helpers'

// components
import { CheckIcon, CrossIcon } from './shared/CheckIcon'

function PricingPlan() {
  const { pricePackage } = useContext(TotalPriceContext)
  const [totalPrice, setTotalPrice] = useState()

  useEffect(() => {
    if (pricePackage.type !== 'campsite') {
      const currentTotalPrice =
        pricePackage.roomPricing[pricePackage.numRooms - 1].price

      if (pricePackage.plan === 'annually') {
        const discountedtotal = getDiscountedAmount(currentTotalPrice * 12)
        setTotalPrice(discountedtotal.toFixed(2))
      } else {
        setTotalPrice(currentTotalPrice)
      }
    } else {
      const getCampsitePricing = calculateCampsitePricing(pricePackage.numRooms)
      setTotalPrice(parseFloat(getCampsitePricing).toFixed(2))
    }
  }, [pricePackage])

  return (
    <div className='flex flex-col-reverse md:gap-24 mt-8 justify-between mx-12 sm:mx-2 sm:flex-row '>
      <div className='sm:basis-1/2 md:basis-2/5 rounded-xl shadow-lg p-8'>
        <div className='rounded-full bg-gray-200 uppercase text-primary text-xs px-3 py-1 inline'>
          14 day free trial
        </div>
        <div
          id='annualPrice'
          className='text-4xl font-Lato text-secondary font-bold mt-3'
        >
          £0.00
          <span className='text-xs uppercase font-light text-blue ml-2'>
            /{pricePackage.plan.toUpperCase()}
          </span>
        </div>
        <div className='text-2xs text-lightgray my-8 font-light'>
          A 14 day free trial grants you access to ALL of our direct bookings
          PMS features. No credit card details required for sign up!
        </div>
        <div className='text-sm text-bold text-lightgray mt-4 mb-8 italic'>
          Features Tailored to {pricePackage.type.toUpperCase()}
        </div>
        <ul className=' flex flex-col space-y-5 w-full text-sm rounded-lg mt-2 mb-6 text-secondary'>
          <li className='flex mt-2 text-secondary'>
            <CrossIcon
              classes='text-lightgray mr-1'
              label='Third-party channel connections'
            />
          </li>
          <li className='flex my-2'>
            <CheckIcon
              classes='text-primary mr-1'
              label='Unrivalled customer support'
            />
          </li>
          <li className='flex my-2'>
            <CheckIcon
              classes='text-primary mr-1'
              label='0% commission on OTA bookings'
            />
          </li>
          <li className='flex my-2'>
            <CheckIcon classes='text-primary mr-1' label='Unlimited users' />
          </li>
        </ul>
        <a href='#' className='text-2xs text-lightgray underline'>
          See All Features
        </a>
        <div className='grid place-items-center my-10'>
          <button className='py-4 px-8 text-xs sm:text-sm bg-gray-100 hover:scale-110 text-primary rounded-full transition delay-150 duration-200 ease-in-out'>
            Start your 14 day free trial
          </button>
        </div>
        <div className='text-2xs text-center italic text-lightgray'>
          Prices displayed are in GBP and exclude VAT
        </div>
      </div>
      <div className='sm:basis-1/2 md:basis-2/5 bg-gradient-to-br from-orange-400 to-primary p-8 rounded-xl !text-white shadow-lg'>
        <div className='rounded-full bg-gray-200 uppercase text-primary text-xs px-3 py-1 inline'>
          Inn Style Member
        </div>
        <div id='monthlyPrice' className='text-4xl font-Lato font-bold mt-4'>
          £ {totalPrice}
          <span className='text-xs uppercase font-light ml-2'>
            /{pricePackage.plan.toUpperCase()}
          </span>
        </div>
        <div className='text-2xs text-white my-8 font-light'>
          A 14 day free trial grants you access to ALL of our direct bookings
          PMS features. No credit card details required for sign up!
        </div>
        <div className='text-sm text-bold text-white mt-4 mb-8 italic'>
          Features Tailored to {pricePackage.type.toUpperCase()}
        </div>
        <ul className=' flex flex-col space-y-5 w-full text-sm rounded-lg mt-2 mb-6 text-white'>
          <li className='flex mt-2 text-white'>
            <CheckIcon
              classes='text-white mr-1'
              label='Premium features (Full Access)'
            />
          </li>
          <li className='flex my-2'>
            <CheckIcon
              classes='text-white mr-1'
              label='Unrivalled customer support'
            />
          </li>
          <li className='flex my-2'>
            <CheckIcon
              classes='text-white mr-1'
              label='0% commission on OTA bookings'
            />
          </li>
          <li className='flex my-2'>
            <CheckIcon classes='text-white mr-1' label='Unlimited users' />
          </li>
        </ul>
        <a href='#' className='block text-2xs text-white underline'>
          See All Features
        </a>
        <div className='grid place-items-center my-10'>
          <button className='py-4 px-8 text-xs sm:text-sm bg-gray-100 hover:scale-110 text-primary rounded-full transition delay-150 duration-200 ease-in-out'>
            Join The Inn Style Family
          </button>
        </div>
        <div className='text-2xs text-center italic text-white'>
          Prices displayed are in GBP and exclude VAT
        </div>
      </div>
    </div>
  )
}
export default PricingPlan

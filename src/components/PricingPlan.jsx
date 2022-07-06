import { useContext, useEffect, useState } from 'react'
import TotalPriceContext from '../context/TotalPriceContext'
import {
  calculateCampsitePricing,
  getDiscountedAmount,
} from '../utilities/helpers'

// components
import { CheckIcon, CrossIcon } from './shared/CheckIcon'

function PricingPlan() {
  const { pricePackage, getPropertyTypeName } = useContext(TotalPriceContext)
  const [totalPrice, setTotalPrice] = useState()
  const [propertyType, setPropertyType] = useState(pricePackage.type)

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
    setPropertyType(getPropertyTypeName(pricePackage.type)[0].title)
    console.log(propertyType)
  }, [
    pricePackage.type,
    pricePackage.roomPricing,
    pricePackage.numRooms,
    pricePackage.plan,
    getPropertyTypeName,
    propertyType,
  ])

  return (
    <div className='flex flex-col-reverse sm:gap-12 lg:gap-24 mt-8 justify-between mx-4 sm:mx-12 sm:mx-2 sm:flex-row'>
      <div className='sm:basis-1/2 md:basis-2/3 rounded-xl shadow-2xl p-12 my-6 bg-white'>
        <div className='rounded-full bg-gray-100 uppercase text-primary text-sm font-medium px-3 py-1 inline'>
          14 day free trial
        </div>
        <div
          id='annualPrice'
          className='text-5xl font-Lato text-secondary font-bold mt-3'
        >
          £0.00
          <span className='text-xs uppercase text-gray-400 font-bold ml-2'>
            / {pricePackage.plan.toUpperCase()}
          </span>
        </div>
        <div className='text-xs text-gray-400 my-8 font-light'>
          A 14 day free trail grants you access to ALL of our direct booking PMS
          features. No card details required for sign up!
        </div>
        <div className='text-md text-regular text-gray-400 mt-4 mb-8'>
          Features Tailored to
          <span className='text-primary font-bold italic'> {propertyType}</span>
        </div>
        <ul className=' flex flex-col space-y-7 w-full text-sm rounded-lg mt-2 mb-6 text-secondary font-bold'>
          <li className='flex mt-2 text-secondary'>
            <CrossIcon
              classes='text-lightgray mr-1'
              label='Third-party channel connections'
            />
          </li>
          <li className='flex'>
            <CheckIcon
              classes='text-primary mr-1'
              label='Unrivalled customer support'
            />
          </li>
          <li className='flex'>
            <CheckIcon
              classes='text-primary mr-1'
              label='0% commission on OTA bookings'
            />
          </li>
          <li className='flex'>
            <CheckIcon classes='text-primary mr-1' label='Unlimited users' />
          </li>
        </ul>
        <a href='#' className='text-xs text-gray-400 underline'>
          See All Features
        </a>
        <div className='grid place-items-center my-10'>
          <button className='py-4 px-8 text-xs sm:text-sm bg-gray-100 hover:scale-110 text-primary rounded-full transition delay-150 duration-200 ease-in-out w-full'>
            Start your <span className='font-bold'>14 day free trial</span>
          </button>
        </div>
        <div className='text-2xs text-center italic text-lightgray'>
          Free trial will end after 14 days from activation, and all features
          will be disabled. No payment details required
        </div>
      </div>

      <div className='sm:basis-1/2 md:basis-2/3 bg-gradient-to-br from-orange-400 to-primary p-12 my-6 rounded-xl !text-white shadow-2xl'>
        <div className='rounded-full bg-gray-100 uppercase text-primary text-sm font-medium px-3 py-1 inline'>
          Inn Style Member
        </div>
        <div id='monthlyPrice' className='text-5xl font-Lato font-bold mt-4'>
          £ {totalPrice}
          <span className='text-xs uppercase font-bold text-white ml-2'>
            / {pricePackage.plan.toUpperCase()}
          </span>
        </div>
        <div className='text-xs text-white my-8 font-light'>
          The most affordable, premium PMS system package out there! One set
          rate tailored to your accommodation needs.
        </div>
        <div className='text-md text-regular text-white mt-4 mb-8'>
          Features Tailored to
          <span className='text-white font-bold italic'> {propertyType}</span>
        </div>
        <ul className=' flex flex-col space-y-7 w-full text-sm rounded-lg mt-2 mb-6 text-white font-bold'>
          <li className='flex mt-2 text-white'>
            <CheckIcon
              classes='text-white mr-1'
              label='Premium features (Full Access)'
            />
          </li>
          <li className='flex'>
            <CheckIcon
              classes='text-white mr-1'
              label='Unrivalled customer support'
            />
          </li>
          <li className='flex'>
            <CheckIcon
              classes='text-white mr-1'
              label='0% commission on OTA bookings'
            />
          </li>
          <li className='flex'>
            <CheckIcon classes='text-white mr-1' label='Unlimited users' />
          </li>
        </ul>
        <a href='#' className='block text-xs text-white underline'>
          See All Features
        </a>
        <div className='grid place-items-center my-10'>
          <button className='py-4 px-8 text-xs sm:text-sm bg-gray-100 hover:scale-110 text-primary rounded-full transition delay-150 duration-200 ease-in-out w-full'>
            Join The <span className='font-bold'>Inn Style Family</span>
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

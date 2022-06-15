import { useContext, useEffect, useState } from 'react'
import TotalPriceContext from '../context/TotalPriceContext'

// components
import { CheckIcon, CrossIcon } from './shared/CheckIcon'

function PricingPlan() {
  const { pricePackage } = useContext(TotalPriceContext)
  const [totalPrice, setTotalPrice] = useState(
    pricePackage.roomPricing[pricePackage.numRooms - 1].price
  )

  useEffect(() => {
    const currentTotalPrice =
      pricePackage.roomPricing[pricePackage.numRooms - 1].price

    if (pricePackage.plan === 'annually') {
      setTotalPrice((currentTotalPrice * 12).toFixed(2))
    } else {
      setTotalPrice(currentTotalPrice)
    }
  }, [pricePackage, totalPrice])

  return (
    <div className='flex gap-24 mt-8 justify-center'>
      <div className='basis-96 rounded-xl shadow-lg p-8'>
        <div className='rounded-full bg-gray-200 uppercase text-primary text-xs px-3 py-1 inline'>
          14 day free trial
        </div>
        <div
          id='annualPrice'
          className='text-4xl font-Lato text-blue font-bold mt-3'
        >
          £0.00
          <span className='text-xs uppercase font-light text-blue ml-2'>
            /{pricePackage.plan.toUpperCase()}
          </span>
        </div>
        <div className='text-2xs text-blue mt-4 font-light'>
          A 14 day free trial grants you access to ALL of our direct bookings
          PMS features. No credit card details required for sign up!
        </div>
        <div className='text-sm text-bold text-blue mt-4 mb-8 font-normal'>
          Features Tailored to BnB / Guesthouse
        </div>
        <ul class=' flex flex-col space-y-5 w-full text-sm rounded-lg mt-2 mb-6 text-secondary'>
          <li class='flex mt-2 text-secondary'>
            <CrossIcon
              classes='text-lightgray mr-1'
              label='Third-party channel connections'
            />
          </li>
          <li class='flex my-2'>
            <CheckIcon
              classes='text-primary mr-1'
              label='Unrivalled customer support'
            />
          </li>
          <li class='flex my-2'>
            <CheckIcon
              classes='text-primary mr-1'
              label='0% commission on OTA bookings'
            />
          </li>
          <li class='flex my-2'>
            <CheckIcon classes='text-primary mr-1' label='Unlimited users' />
          </li>
        </ul>
        <a href='#' className='text-2xs text-lightgray underline'>
          See All Features
        </a>
        <div className='grid place-items-center my-10'>
          <button className='py-4 px-8 text-sm bg-gray-100 text-primary rounded-full'>
            Start your 14 day free trial
          </button>
        </div>
        <div className='text-2xs text-center italic text-lightgray'>
          Prices displayed are in GBP and exclude VAT
        </div>
      </div>
      <div className='basis-96 bg-gradient-to-r from-orange-400 to-primary p-8 rounded-xl !text-white shadow-lg'>
        <div className='rounded-full bg-gray-200 uppercase text-primary text-xs px-3 py-1 inline'>
          Inn Style Member
        </div>
        <div id='monthlyPrice' className='text-4xl font-Lato font-bold mt-4'>
          £ {totalPrice}
          <span className='text-xs uppercase font-light ml-2'>
            /{pricePackage.plan.toUpperCase()}
          </span>
        </div>
        <div className='text-2xs text-white mt-4 font-light'>
          A 14 day free trial grants you access to ALL of our direct bookings
          PMS features. No credit card details required for sign up!
        </div>
        <div className='text-sm text-bold text-white mt-4 mb-8 font-normal'>
          Features Tailored to BnB / Guesthouse
        </div>
        <ul class=' flex flex-col space-y-5 w-full text-sm rounded-lg mt-2 mb-6 text-white'>
          <li class='flex mt-2 text-white'>
            <CheckIcon
              classes='text-white mr-1'
              label='Premium features (Full Access)'
            />
          </li>
          <li class='flex my-2'>
            <CheckIcon
              classes='text-white mr-1'
              label='Unrivalled customer support'
            />
          </li>
          <li class='flex my-2'>
            <CheckIcon
              classes='text-white mr-1'
              label='0% commission on OTA bookings'
            />
          </li>
          <li class='flex my-2'>
            <CheckIcon classes='text-white mr-1' label='Unlimited users' />
          </li>
        </ul>
        <a href='#' className='block text-2xs text-white underline'>
          See All Features
        </a>
        <div className='grid place-items-center my-10'>
          <button className='py-4 px-8 text-sm bg-gray-100 text-primary rounded-full'>
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

import { useContext, useEffect, useState } from 'react'
import TotalPriceContext from '../context/TotalPriceContext'
import { roundToTwo } from '../utilities/helpers'

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
        <div className='text-sm text-bold text-blue mt-4 font-normal'>
          Features Tailored to BnB / Guesthouse
        </div>
        <div className='text-sm'>
          <ul class='w-full rounded-lg mt-2 mb-3 text-blue-800'>
            <li class='flex my-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              Third-party channel connections
            </li>
            <li class='flex my-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              Unrivalled customer support
            </li>
          </ul>
        </div>
      </div>
      <div className='basis-96 bg-gradient-to-r from-primary to-rose-400 p-8 rounded-xl !text-white shadow-lg'>
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
        <div className='text-sm text-bold text-white mt-4 font-normal'>
          Features Tailored to BnB / Guesthouse
        </div>
      </div>
    </div>
  )
}
export default PricingPlan

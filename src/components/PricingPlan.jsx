import { useContext, useEffect, useState } from 'react'
import TotalPriceContext from '../context/TotalPriceContext'

function PricingPlan() {
  const { price } = useContext(TotalPriceContext)

  useEffect(() => {
    setTotalPrice(price.totalPrice)
  }, [price])

  const [totalPrice, setTotalPrice] = useState()

  return (
    <div className='flex gap-12 mt-8'>
      <div className='flex-1 rounded-3xl shadow-lg p-8'>
        <div className='rounded-full bg-gray-200 uppercase text-orange text-xs px-3 py-1 inline'>
          14 day free trial
        </div>
        <div
          id='annualPrice'
          className='text-4xl font-Lato text-blue font-bold mt-3'
        >
          £0.00
          <span className='text-xs uppercase font-light text-blue'>
            /{price.plan.toUpperCase()}
          </span>
        </div>
        <div className='text-xs text-blue mt-4 font-light'>
          A 14 day free trial grants you access to ALL of our direct bookings
          PMS features. No credit card details required for sign up!
        </div>
        <div className='text-sm text-bold text-blue mt-4 font-normal'>
          Features Tailored to BnB / Guesthouse
        </div>
      </div>
      <div className='flex-1 bg-gradient-to-r from-orange to-rose-400 rounded-3xl p-8 !text-white rounded-3xl shadow-lg'>
        <div className='rounded-full bg-gray-200 uppercase text-orange text-xs px-3 py-1 inline'>
          Inn Style Member
        </div>
        <div id='monthlyPrice' className='text-4xl font-Lato font-bold mt-4'>
          £{totalPrice}
          <span className='text-xs uppercase font-light'>
            /{price.plan.toUpperCase()}
          </span>
        </div>
        <div className='text-xs text-white mt-4 font-light'>
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

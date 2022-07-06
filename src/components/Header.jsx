import { useState, useContext } from 'react'
import TotalPriceContext from '../context/TotalPriceContext'

function Header() {
  const { pricePackage, updatePricePackage } = useContext(TotalPriceContext)

  const [plan, setplan] = useState(pricePackage.plan)

  const handleChange = (e) => {
    setplan(e.target.value)
    updatePricePackage({
      plan: e.target.value,
    })
  }

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 my-8'>
      <div className='col-span-2 mx-8 sm:mx-0'>
        <h4 className='text-primary text-lg font-bold sm:text-lg font-Lato uppercase'>
          Pricing Plans
        </h4>
        <h1 className='text-secondary text-5xl sm:text-6xl font-Yeseva'>
          Hello Affordable.
        </h1>
      </div>
      <div className='mx-6 sm:mx-0'>
        <div className='form-control'>
          <label className='label cursor-pointer justify-end flex-row-reverse md:flex-row'>
            <span
              className={`label-text ml-4 sm:mr-4 text-xl font-regular ${
                plan === 'monthly' ? 'text-secondary' : 'text-lightgray'
              }`}
            >
              Pay Monthly
            </span>
            <input
              id='plan-monthly'
              type='radio'
              name='monthly'
              className='radio border border-gray-200 checked:bg-secondary checked:border-secondary'
              value='monthly'
              checked={plan === 'monthly'}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='form-control'>
          <label className='label cursor-pointer justify-end flex-row-reverse md:flex-row'>
            <span
              className={`label-text ml-4 sm:mr-4 text-xl font-regular ${
                plan === 'annually' ? 'text-secondary' : 'text-lightgray'
              }`}
            >
              Pay Annually (Save 10%)
            </span>
            <input
              id='plan-annually'
              type='radio'
              name='annually'
              className={`radio border-lightgray ${
                plan === 'annually'
                  ? 'checked:bg-secondary'
                  : 'checked:bg-gray-400'
              } checked:border-secondary`}
              checked={plan === 'annually'}
              value='annually'
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    </div>
  )
}
export default Header

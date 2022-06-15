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
      <div className='col-span-2'>
        <h4 className='text-primary text-lg font-Lato font-light uppercase'>
          Pricing Plans
        </h4>
        <h1 className='text-secondary text-6xl font-Yeseva'>
          Hello Affordable.
        </h1>
      </div>
      <div className=''>
        <div>
          <div className='form-control'>
            <label className='label cursor-pointer justify-end'>
              <span
                className={`label-text mr-4 ${
                  plan === 'monthly' ? 'text-secondary' : 'text-lightgray'
                }`}
              >
                Pay Monthly
              </span>
              <input
                id='plan-monthly'
                type='radio'
                name='monthly'
                className='radio checked:bg-primary'
                value='monthly'
                checked={plan === 'monthly'}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className='form-control'>
            <label className='label cursor-pointer justify-end'>
              <span
                className={`label-text mr-4 ${
                  plan === 'annually' ? 'text-secondary' : 'text-lightgray'
                }`}
              >
                Pay Annually (Save 10%)
              </span>
              <input
                id='plan-annually'
                type='radio'
                name='annually'
                className={`radio ${
                  plan === 'annually'
                    ? 'checked:bg-primary'
                    : 'checked:bg-gray-400'
                }`}
                checked={plan === 'annually'}
                value='annually'
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header

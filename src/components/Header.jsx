function Header() {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 my-8'>
      <div className='col-span-2'>
        <h4 className='text-orange text-lg font-Lato font-light uppercase'>
          Pricing Plans
        </h4>
        <h1 className='text-blue text-6xl font-Yeseva'>Hello Affordable.</h1>
      </div>
      <div className=''>
        <div>
          <div className='form-control'>
            <label className='label cursor-pointer justify-end'>
              <span className='label-text mr-4'>Pay Monthly</span>
              <input
                id='plan-monthly'
                type='radio'
                name='plan-radio'
                className='radio checked:bg-red-500'
                checked
              />
            </label>
          </div>
          <div className='form-control'>
            <label className='label cursor-pointer justify-end'>
              <span className='label-text mr-4 text-lightgray'>
                Pay Annually (Save 10%)
              </span>
              <input
                id='plan-annually'
                type='radio'
                name='plan-radio'
                className='radio checked:bg-blue-500'
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header

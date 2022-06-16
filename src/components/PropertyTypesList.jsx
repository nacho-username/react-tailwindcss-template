import { useContext, useEffect, useState } from 'react'
import TotalPriceContext from '../context/TotalPriceContext'
import { getPropertyTypes } from '../data'

function PropertyTypesList() {
  const { pricePackage, updatePricePackage } = useContext(TotalPriceContext)
  const [isDesktop, setisDesktop] = useState(window.innerWidth > 650)

  const propertyTypes = getPropertyTypes()

  const updateMedia = (width) => {
    setisDesktop(true)
  }

  useEffect(() => {
    const width = window.innerwidth
    window.addEventListener('resize', updateMedia(width))
    return () => window.removeEventListener('resize', updateMedia)
  })

  const handleClick = (e) => {
    console.log(e.target.getAttribute('data-prop-type'))
    updatePricePackage({
      type: e.target.getAttribute('data-prop-type'),
    })
  }

  console.log(pricePackage)

  return (
    <>
      {isDesktop ? (
        <div className='tabs text-secondary mb-6 justify-stretch font-bold'>
          {propertyTypes.map((type) => (
            <div
              data-prop-type={type.dataId}
              className={`tab tab-bordered flex-1 ${
                pricePackage.type === type.dataId ? 'tab-active' : ''
              }`}
              onClick={handleClick}
            >
              {type.title}
            </div>
          ))}
        </div>
      ) : (
        <div className='flex justify-center mb-4'>
          <select className='select w-60 max-w-xs select-primary'>
            <option onClick={handleClick} data-prop-type='bnb'>
              BnB / Guesthouse
            </option>
            <option onClick={handleClick} data-prop-type='self-catering'>
              Self Catering
            </option>
            <option>Small / Boutique Hotels</option>
            <option>Campsites</option>
            <option>Pubs / Inns</option>
          </select>
        </div>
      )}
    </>
  )
}
export default PropertyTypesList

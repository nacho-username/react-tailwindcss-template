import { useContext, useEffect, useState } from 'react'

import TotalPriceContext from '../context/TotalPriceContext'
import { getPropertyTypes } from '../data'
import { calculateCampsitePricing } from '../utilities/helpers'

function PropertyTypesList() {
  const { pricePackage, updatePricePackage } = useContext(TotalPriceContext)
  const [width, setWidth] = useState(window.innerWidth)

  const propertyTypes = getPropertyTypes()

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => window.removeEventListener('resize', handleWindowSizeChange)
  })

  const handleClick = (e) => {
    const propertyType = e.target.getAttribute('data-prop-type')
    if (propertyType === 'campsite') {
      const getCampsitePrice = calculateCampsitePricing(pricePackage.numRooms)
      updatePricePackage({
        type: propertyType,
        totalPrice: getCampsitePrice,
        numRooms: 40,
        unit: 'pitch',
      })
      return
    } else {
      updatePricePackage({
        type: propertyType,
        numRooms: 2,
        unit: 'room',
      })
    }
  }

  return (
    <>
      {width > 768 ? (
        <div className='tabs group text-secondary mt-20 mb-6 justify-stretch font-bold'>
          {propertyTypes.map((type) => (
            <div
              key={type}
              data-prop-type={type.dataId}
              className={`tab border-b border-gray-400 text-secondary text-sm md:text-md pb-10 flex-1 transition ease-in-out delay-75 ${
                pricePackage.type === type.dataId ? 'tab-active' : ''
              }`}
              onMouseOver={handleClick}
              onClick={handleClick}
            >
              {type.title}
            </div>
          ))}
        </div>
      ) : (
        <div className='flex justify-center mb-4'>
          <select className='select w-96 select-secondary text-secondary'>
            <option onClick={handleClick} data-prop-type='bnb'>
              BnB / Guesthouse
            </option>
            <option onClick={handleClick} data-prop-type='self-catering'>
              Self Catering
            </option>
            <option onClick={handleClick} data-prop-type='hotel'>
              Small / Boutique Hotels
            </option>
            <option onClick={handleClick} data-prop-type='campsite'>
              Campsites
            </option>
            <option onClick={handleClick} data-prop-type='pub'>
              Pubs / Inns
            </option>
          </select>
        </div>
      )}
    </>
  )
}
export default PropertyTypesList

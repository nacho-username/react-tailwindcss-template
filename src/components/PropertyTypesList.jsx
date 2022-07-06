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
        <div className='text-sm font-medium text-left text-secondary cursor-pointer font-bold border-b mx-4 my-6 border-gray-400'>
          <ul className='flex flex-wrap justify-between -mb-px'>
            {propertyTypes.map((type) => (
              <li key={type} className=''>
                <a
                  onClick={handleClick}
                  data-prop-type={type.dataId}
                  className={` ${
                    pricePackage.type === type.dataId ? 'active' : ''
                  } text-sm md:text-md inline-block py-4 rounded-t-lg border-b-2 border-transparent hover:text-primary hover:border-primary `}
                >
                  {type.title}
                </a>
              </li>
            ))}
          </ul>
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

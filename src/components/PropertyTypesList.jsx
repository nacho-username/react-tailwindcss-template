import { useContext, useEffect, useState } from 'react'
import TotalPriceContext from '../context/TotalPriceContext'
import { getPropertyTypes } from '../data'
import { calculateCampsitePricing } from '../utilities/helpers'

function PropertyTypesList() {
  const { pricePackage, updatePricePackage } = useContext(TotalPriceContext)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 650)

  const propertyTypes = getPropertyTypes()

  const updateMedia = (width) => {
    setIsDesktop(true)
  }

  useEffect(() => {
    const width = window.innerwidth
    window.addEventListener('resize', updateMedia(width))
    return () => window.removeEventListener('resize', updateMedia)
  })

  const handleClick = (e) => {
    const propertyType = e.target.getAttribute('data-prop-type')
    if (propertyType === 'campsite') {
      const getCampsitePrice = calculateCampsitePricing(pricePackage.numRooms)
      updatePricePackage({
        type: propertyType,
        totalPrice: getCampsitePrice,
      })
      return
    } else {
      updatePricePackage({
        type: propertyType,
        numRooms: 40,
      })
    }
  }

  return (
    <>
      {isDesktop ? (
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

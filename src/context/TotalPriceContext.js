import { useEffect } from 'react'
import { createContext, useState } from 'react'
import { getPricing, getPropertyTypes } from '../data'

const TotalPriceContext = createContext()
const roomPricing = getPricing()
const propertyTypes = getPropertyTypes()

export const PricingProvider = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      window.parent.postMessage(
        { iframeHeight: document.body.scrollHeight },
        '*'
      )
    }, 200)
  }, [])

  const [pricePackage, setPricePackage] = useState({
    plan: 'monthly',
    numRooms: 1,
    totalPrice: 19.95,
    roomPricing: roomPricing,
    type: 'bnb',
    unit: 'room',
  })

  const updatePricePackage = (updPackage) => {
    const newPricePackage = {
      ...pricePackage,
      ...updPackage,
    }
    setPricePackage(newPricePackage)
  }

  const getPropertyTypeName = (type) => {
    const FriendlyName = propertyTypes.filter((item) =>
      item.dataId.includes(type)
    )
    return FriendlyName
  }

  return (
    <TotalPriceContext.Provider
      value={{ pricePackage, updatePricePackage, getPropertyTypeName }}
    >
      {children}
    </TotalPriceContext.Provider>
  )
}

export default TotalPriceContext

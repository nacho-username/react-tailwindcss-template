import { createContext, useState } from 'react'
import { getPricing } from '../data'

const TotalPriceContext = createContext()
const roomPricing = getPricing()

export const PricingProvider = ({ children }) => {
  const [pricePackage, setPricePackage] = useState({
    plan: 'monthly',
    numRooms: 1,
    totalPrice: 19.95,
    roomPricing: roomPricing,
    type: 'bnb',
  })

  const updatePricePackage = (updPackage) => {
    const newPricePackage = {
      ...pricePackage,
      ...updPackage,
    }
    setPricePackage(newPricePackage)
  }

  return (
    <TotalPriceContext.Provider value={{ pricePackage, updatePricePackage }}>
      {children}
    </TotalPriceContext.Provider>
  )
}

export default TotalPriceContext

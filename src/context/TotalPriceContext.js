import { createContext, useState } from 'react'
import { getPricing } from '../data'

const TotalPriceContext = createContext()

export const PricingProvider = ({ children }) => {
  const [price, setPrice] = useState({
    plan: 'monthly',
    numRooms: 1,
    totalPrice: 19.95,
  })

  return (
    <TotalPriceContext.Provider value={{ price }}>
      {children}
    </TotalPriceContext.Provider>
  )
}

export default TotalPriceContext

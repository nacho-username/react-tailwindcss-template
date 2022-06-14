import { createContext, useState } from 'react'
import { getPricing } from '../data'

const TotalPriceContext = createContext()

export const PricingProvider = ({ children }) => {
  const [price, setPrice] = useState({
    plan: 'monthly',
    numRooms: 1,
    totalPrice: 19.95,
  })

  const updatePricing = (updPrice) => {
    console.log(updPrice)
    // setPrice((price[updPrice] = updPrice))
    console.log(price)
  }

  return (
    <TotalPriceContext.Provider value={{ price, updatePricing }}>
      {children}
    </TotalPriceContext.Provider>
  )
}

export default TotalPriceContext

import { createContext, useState } from 'react'
import { getPricing } from '../data'

const TotalPriceContext = createContext()
const roomPricing = getPricing()

export const PricingProvider = ({ children }) => {
  const [pricePackage, setPricePackage] = useState({
    plan: 'monthly',
    numRooms: 1,
    totalPrice: '19.95',
  })

  const updateRoomCount = (updRoomCount) => {
    const updPrice = {
      ...pricePackage,
      numRooms: updRoomCount,
    }

    setPricePackage(updPrice)
    updateTotalPrice(updRoomCount)
  }

  const updateTotalPrice = (roomCount) => {
    const newTotalPrice = parseFloat(roomPricing[roomCount - 1].price).toFixed(
      2
    )
    if (roomCount <= 40) {
      const updTotalPrice = {
        ...pricePackage,
        totalPrice: newTotalPrice,
      }

      setPricePackage(updTotalPrice)
    }
  }

  const updatePlan = (plan) => {
    const updPrice = {
      ...pricePackage,
      plan: plan,
    }

    setPricePackage(updPrice)
    console.log(updPrice)
    updateTotalPrice(pricePackage.numRooms)
  }

  // console.log(price)

  return (
    <TotalPriceContext.Provider
      value={{ pricePackage, updatePlan, updateRoomCount, updateTotalPrice }}
    >
      {children}
    </TotalPriceContext.Provider>
  )
}

export default TotalPriceContext

import { useContext, useState, useEffect } from 'react'
import TotalPriceContext, { PricingPackage } from '../context/TotalPriceContext'
import { calculateCampsitePricing } from '../utilities/helpers'

function RoomNumInput() {
  const { pricePackage, updatePricePackage } = useContext(TotalPriceContext)
  const [roomNum, setRoomNum] = useState(pricePackage.numRooms)
  const [unit, setUnit] = useState('room')

  useEffect(() => {
    setRoomNum(pricePackage.numRooms)
  }, [pricePackage])

  const handleChange = (e) => {
    setRoomNum(e.target.value)
    updatePricePackage({
      numRooms: e.target.value,
    })
  }

  const handlePlus = () => {
    if (pricePackage.type !== 'campsite') {
      setUnit('rooms')
      if (roomNum <= 39) {
        setRoomNum(roomNum + 1)
        updatePricePackage({
          numRooms: roomNum + 1,
        })
      }
    } else {
      if (roomNum <= 99) {
        setUnit('pitchs')
        setRoomNum(roomNum + 1)
        let getCampsitePricing = calculateCampsitePricing(roomNum)
        updatePricePackage({
          totalPrice: parseFloat(getCampsitePricing),
          numRooms: roomNum + 1,
        })
      }
    }
  }

  const handleMinus = () => {
    if (pricePackage.type !== 'campsite') {
      if (roomNum > 1) {
        setRoomNum(roomNum - 1)
        updatePricePackage({
          numRooms: roomNum - 1,
        })
      } else if (roomNum === 1) {
        setUnit('room')
      }
    } else {
      if (roomNum > 1) {
        setUnit('pitchs')
        setRoomNum(roomNum - 1)
        let getCampsitePricing = calculateCampsitePricing(roomNum)
        updatePricePackage({
          totalPrice: parseFloat(getCampsitePricing),
          numRooms: roomNum - 1,
        })
      }
    }
  }

  return (
    <div className='flex justify-center'>
      <label className='label'>
        <span className='label-text mr-2 text-lightgray'>I have</span>
        <div className='flex align-middle justify-center w-[130px] py-3 px-6 border text-primary border-lightgray rounded-full'>
          <div onClick={handleMinus} className='text-md ml-2 cursor-pointer'>
            -
          </div>
          <div onChange={handleChange} className='text-sm px-4 '>
            {roomNum}
          </div>
          <div onClick={handlePlus} className='text-md mr-2 cursor-pointer'>
            +
          </div>
        </div>
        <span className='label-text ml-2 text-lightgray'>{unit}</span>
      </label>
    </div>
  )
}
export default RoomNumInput

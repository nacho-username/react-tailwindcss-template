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
    if (roomNum > 0) {
      updatePricePackage({
        numRooms: e.target.value,
      })
    }
  }

  return (
    <div className='w-2/3 mx-auto'>
      <label className='label w-32 mx-auto'>
        <span className='label-text mr-2 text-lightgray'>I have</span>
        <span className='label-text mr-2 text-primary'>{roomNum}</span>
        <div className='label-text ml-2 text-lightgray'>
          {roomNum > 1 ? 'rooms' : 'room'}
        </div>
      </label>
      <div className='text-primary grow  rounded-full'>
        {/* <input
            type='number'
            value={roomNum}
            onChange={handleChange}
            className='text-sm py-4 w-24'
          /> */}
        <input
          type='range'
          min='1'
          max='40'
          value={roomNum}
          onChange={handleChange}
          step='1'
          className='range range-primary'
        />
      </div>
    </div>
  )
}
export default RoomNumInput

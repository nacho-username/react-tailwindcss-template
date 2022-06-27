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

  const renderIncrementSteps = () => {
    let steps = []
    for (let i = 1; i < 41; i++) {
      steps.push(<span className='text-lightgray invisible md:visible'>|</span>)
    }
    return steps
  }

  return (
    <div className='w-2/3 mx-auto'>
      <label className='label w-32 mx-auto'>
        <span className='label-text mr-2 text-lightgray'>I have</span>
        <span className='label-text mr-2 text-primary text-center'>
          {roomNum}
        </span>
        <div className='label-text text-lightgray'>
          {roomNum > 1 ? 'rooms' : 'room'}
        </div>
      </label>
      <div className='text-primary grow  rounded-full'>
        <input
          type='range'
          min='1'
          max={pricePackage.type === 'campsite' ? 100 : 40}
          value={roomNum}
          onChange={handleChange}
          step='1'
          className='range range-primary'
        />
        <div class='w-full flex justify-between text-xs px-2'>
          {renderIncrementSteps()}
        </div>
      </div>
    </div>
  )
}
export default RoomNumInput

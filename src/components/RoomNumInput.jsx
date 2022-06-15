import { useContext, useState } from 'react'
import TotalPriceContext from '../context/TotalPriceContext'

function RoomNumInput() {
  const { pricePackage, updatePricePackage } = useContext(TotalPriceContext)
  const [roomNum, setRoomNum] = useState(pricePackage.numRooms)

  const handleChange = (e) => {
    setRoomNum(e.target.value)
    updatePricePackage({
      numRooms: e.target.value,
    })
  }

  return (
    <div className='flex justify-center'>
      <label className='label'>
        <span className='label-text mr-2'>I have</span>
        <input
          onChange={handleChange}
          value={roomNum}
          type='number'
          step={1}
          min={1}
          max={40}
          className='input input-bordered w-16 px-2'
        />
        <span className='label-text ml-2'>Rooms</span>
      </label>
    </div>
  )
}
export default RoomNumInput

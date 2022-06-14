import { useContext, useState } from 'react'
import TotalPriceContext from '../context/TotalPriceContext'

function RoomNumInput() {
  const { pricePackage, updateRoomCount } = useContext(TotalPriceContext)
  const [roomNum, setRoomNum] = useState(pricePackage.numRooms)

  const handleInputChange = (e) => {
    const updRoomNum = parseInt(e.target.value)
    setRoomNum(updRoomNum)
    updateRoomCount(updRoomNum)
  }

  return (
    <div className='flex justify-center'>
      {/* <label className='input-group'>
        <span>Price</span>
        <input type='text' placeholder='10' class='input input-bordered' />
        <span>USD</span>
      </label> */}
      <label className='label'>
        <span className='label-text mr-2'>I have</span>
        <input
          onChange={handleInputChange}
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

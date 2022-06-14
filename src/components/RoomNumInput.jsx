import { useContext, useState } from 'react'
import TotalPriceContext from '../context/TotalPriceContext'

function RoomNumInput() {
  const { updatePricing } = useContext(TotalPriceContext)
  const [roomNum, setRoomNum] = useState(1)

  const handleInputChange = (e) => {
    setRoomNum(e.target.value)

    updatePricing({ numRooms: e.target.value })
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
          className='input input-bordered w-16 px-2'
        />
        <span className='label-text ml-2'>Rooms</span>
      </label>
    </div>
  )
}
export default RoomNumInput

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

  const handlePlus = () => {
    if (roomNum < 39) {
      setRoomNum(roomNum + 1)
      updatePricePackage({
        numRooms: roomNum + 1,
      })
    }
  }

  const handleMinus = () => {
    if (roomNum > 1) {
      setRoomNum(roomNum - 1)
      updatePricePackage({
        numRooms: roomNum - 1,
      })
    }
  }

  return (
    <div className='flex justify-center'>
      <label className='label'>
        <span className='label-text mr-2 text-lightgray'>I have</span>
        <div className='flex align-middle py-3 px-6 border text-primary border-lightgray rounded-full'>
          <div onClick={handlePlus} className='text-md mr-2 cursor-pointer'>
            +
          </div>
          <div onChange={handleChange} className='text-sm px-4 '>
            {roomNum}
          </div>
          <div onClick={handleMinus} className='text-md ml-2 cursor-pointer'>
            -
          </div>
        </div>
        <span className='label-text ml-2 text-lightgray'>Rooms</span>
      </label>
    </div>
  )
}
export default RoomNumInput

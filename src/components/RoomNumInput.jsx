function RoomNumInput() {
  return (
    <div className='flex justify-center'>
      {/* <label className='input-group'>
        <span>Price</span>
        <input type='text' placeholder='10' class='input input-bordered' />
        <span>USD</span>
      </label> */}
      <label className='label'>
        <span className='label-text mr-2'>I have</span>
        <input type='number' className='input input-bordered w-16 px-2' />
        <span className='label-text ml-2'>Rooms</span>
      </label>
    </div>
  )
}
export default RoomNumInput

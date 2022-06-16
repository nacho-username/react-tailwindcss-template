import { useEffect, useState } from 'react'

function PropertyTypesList() {
  const [isDesktop, setisDesktop] = useState(window.innerWidth > 650)

  const updateMedia = (width) => {
    setisDesktop(width > 1024)
  }

  useEffect(() => {
    const width = window.innerwidth
    window.addEventListener('resize', updateMedia(width))
    return () => window.removeEventListener('resize', updateMedia)
  })

  return (
    <>
      {isDesktop ? (
        <div className='tabs text-secondary mb-6 justify-stretch font-bold'>
          <a className='tab tab-bordered flex-1 tab-active'>BnB / Guesthouse</a>
          <a className='tab tab-bordered flex-1'>Self Catering</a>
          <a className='tab tab-bordered flex-1'>Small / Boutique Hotels</a>
          <a className='tab tab-bordered flex-1'>Campsites</a>
          <a className='tab tab-bordered flex-1'>Pubs / Inns</a>
        </div>
      ) : (
        <div className='flex justify-center mb-4'>
          <select className='select w-60 max-w-xs select-primary'>
            <option>BnB / Guesthouse</option>
            <option>Self Catering</option>
            <option>Small / Boutique Hotels</option>
            <option>Campsites</option>
            <option>Pubs / Inns</option>
          </select>
        </div>
      )}
    </>
  )
}
export default PropertyTypesList

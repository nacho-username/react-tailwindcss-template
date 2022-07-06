// Components
import Header from './components/Header'
import PricingPlan from './components/PricingPlan'
import RoomNumInput from './components/RoomNumInput'
import PropertyTypesList from './components/PropertyTypesList'

function App() {
  return (
    <>
      <div className='container bg-transparent max-w-screen-xl px-0 md:px-8 mx-auto'>
        <Header />
        <PropertyTypesList />
        <RoomNumInput />
        <PricingPlan />
      </div>
      <div className='bg-secondary min-h-[36rem] py-24 -mt-[22rem]'></div>
    </>
  )
}

export default App

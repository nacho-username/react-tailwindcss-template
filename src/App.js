// Components
import Header from './components/Header'
import PricingPlan from './components/PricingPlan'
import RoomNumInput from './components/RoomNumInput'
import PropertyTypesList from './components/PropertyTypesList'

function App() {
  return (
    <div className='container mx-auto'>
      <Header />
      <PropertyTypesList />
      <RoomNumInput />
      <PricingPlan />
    </div>
  )
}

export default App

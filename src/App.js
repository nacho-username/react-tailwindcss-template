// Components
import Header from './components/Header'
import PricingPlan from './components/PricingPlan'
import RoomNumInput from './components/RoomNumInput'

function App() {
  return (
    <div className='container mx-auto'>
      <Header />
      <RoomNumInput />
      <PricingPlan />
    </div>
  )
}

export default App

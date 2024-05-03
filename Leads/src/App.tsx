import logo from './assets/logo.svg'
import './index.css'

function App() {
  return (
      <div className='flex flex-col gap-4 m-4'>
        <div className='flex items-center gap-4 py-8 px-36'>
          <img src={logo} className="logo" alt="ACERTA logo" />
        </div>
        <div>
      <p className='mx-36 text-2xl font-sans text-black-text'>Consulta de Leads </p>
    </div>
      </div>
      
  )
}

export default App

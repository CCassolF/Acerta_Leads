import logo from './assets/logo.svg'
import './index.css'

function App() {
  return (
      <div className='grid h-screen grid-cols-2 place-items-center'>
        <div className='flex items-center gap-4'>
          <img src={logo} className="logo" alt="ACERTA logo" />
          <h1 className='text-2xl font-sans text-black-text'>Consulta de Leads </h1>
        </div>
      </div>
  )
}

export default App

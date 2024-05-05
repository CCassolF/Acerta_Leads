
import logo from './assets/logo.svg'
import { Button } from './components/buttonNewLead'
import './index.css'

function App( ) {
  return (
    <div className='bg-slate-100'>
      <div className='flex-col '>
        <div className='mx-36 py-8 '>
          <img src={logo} className="logo" alt="ACERTA logo" />

        </div>
        <div className='flex px-36 gap-[748px] justify-between text-nowrap text-lg' >
          <h1 className='font-sans'>Consulta de Leads</h1>
          <Button type='submit' title='Novo lead '/>
        </div>
      </div>
    </div>
      
  )
}

export default App

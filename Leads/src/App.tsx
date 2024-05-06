import { Header } from './components/header'

export function App( ) {
  return (
    <div className='bg-slate-100 h-screen'>
      <Header/>
      <div className='bg-white w-[1082px] mx-auto mt-7 p-6 border rounded-md '>
        <div className='flex'>
          <div className='ml-36'>
            <label htmlFor="">CPF</label>
            <input type="number" placeholder='Digite o CPF do cliente'/>
          </div>
          <div className=''>
            <label htmlFor="">Nome do cliente</label>
            <input type="text" placeholder='Digite o nome do cliente' />
          </div>
        </div>
        <div className='ml-36'>
          <button>Limpar tudo</button>
          <button>Filtrar</button>
        </div>
      </div>
   </div>
      
  )
}



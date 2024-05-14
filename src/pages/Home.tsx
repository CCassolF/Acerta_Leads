import { Button } from "../components/button";
import { Header } from "../components/header";

export function Home () {
  return (
    <div className='bg-slate-100 h-screen'>
      <Header/>
      <div className='bg-white mx-36 mt-7 p-6 border w-auto rounded-md '>
        <div className='flex gap-4'>
          <div className='flex flex-col w-full'>
            <label htmlFor="">CPF</label>
            <input className='border rounded-sm border-gray-100 w-full h-10 pl-4 placeholder-gray-text' type="number" placeholder='Digite o CPF do cliente'/>
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="">Nome do cliente</label>
            <input className='border rounded-sm border-gray-100 w-full h-10 pl-4 placeholder-gray-text' type="text" placeholder='Digite o nome do cliente' />
          </div>
        </div>
        <div className='flex gap-2 mt-4 justify-end'>
          <Button>Limpar tudo</Button>
          <button className='items-center gap-2 w-[118px] px-4 py-2 border text-white border-cyan-button rounded-sm 
     bg-cyan-button hover:opacity-90 text-base font-semibold'>Filtrar</button>
        </div>
      </div>
      <div className='bg-white mx-36 mt-6 p-9 pl-12 border w-auto rounded-md'>
        <div>
          <span className='text-gray-text text-sm'> Nenhum lead cadastrado </span>
        </div>
      </div>
   </div>
  )
}
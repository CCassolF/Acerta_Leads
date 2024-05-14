import { Plus } from '@phosphor-icons/react'
import logo from '../assets/logo.svg'
import { Button } from './button'

export function Header () {
  return (
    <header>
      <div className='mx-36 py-8 '>
        <img src={logo} alt="ACERTA logo" />

      </div>
      <div className='flex px-36 justify-between items-center' >
        <h1 className='font-semibold text-2xl leading-7'>Consulta de Leads</h1>
         <Button > Novo lead <Plus className='size-6'/> </Button> 
      </div>
    </header>
  )
}

    export function HeaderCadastro () {
    return (
      <header>
        <div className='mx-36 py-8 '>
          <img src={logo} alt="ACERTA logo" />
  
        </div>
        <div className='flex px-36 justify-between items-center' >
          <h1 className='font-semibold text-2xl leading-7'>Cadastro de Leads</h1>
          </div>
          </header>
    )
}
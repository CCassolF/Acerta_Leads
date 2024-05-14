import logo from '../assets/logo.svg'

export function Logo() {
  return (
    <div >
      <img src={logo} alt="ACERTA logo" />
      <h1 className='font-semibold text-2xl leading-7 mt-8'>Consulta de Leads</h1>
    </div>
  )
}
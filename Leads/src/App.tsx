import { HeaderCadastro } from "./components/header";

export function App( ) {
  return (
    <div className="bg-slate-100 h-screen">
      <HeaderCadastro/>
      <div className="bg-white mx-36 mt-7 p-6 border w-auto rounded-lg ">
        <div className="border h-16 border-cyan-500 w-[460px] flex justify-center space-x-44">
          <h1>Dados pessoais</h1>
          <h1>Contato</h1>
          </div>

      </div>
    </div>

      
  )
}



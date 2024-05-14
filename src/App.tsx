import { Plus } from "@phosphor-icons/react";
import { Button } from "./components/button";
import { Logo } from "./components/logo";

export function App( ) {
  return (
    <div className="bg-slate-100 h-screen">
      <div className="mx-36 pt-8 grid grid-cols-3">
        <Logo />

        <Button className="col-start-3 place-self-end w-fit">
          Novo lead
          <Plus className="size-4" />
        </Button>
      </div>
      <div className="flex justify-center bg-white mx-36 mt-7 p-6 border w-auto rounded-lg ">
        <div className="border h-16  border-cyan-500 w-[460px] flex justify-center space-x-44">
          <h1>Dados pessoais</h1>
          <h1>Contato</h1>
        </div>
      </div>
    </div>
  )
}



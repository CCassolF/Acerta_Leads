import { PencilSimple, TrashSimple } from "@phosphor-icons/react";
import { Button } from "../components/button";
import { Header } from "../components/header";

export function Leads () {
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
      <div className="relative overflow-x-auto  sm:rounded-lg">
        <table className="w-full text-sm text-left dark:text-gray-table">
          <thead className="text-xs text-gray-head-table ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Nome
                </th>
                <th scope="col" className="px-6 py-3">
                    CPF
                </th>
                <th scope="col" className="px-6 py-3">
                    E-mail
                </th>
                <th scope="col" className="px-6 py-3">
                    Telefone
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
             <tr className="odd:bg-white even:bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                  João da Silva Siqueira
                </th>
                <td className="px-6 py-4">
                  055.373.570-54
                </td>
                <td className="px-6 py-4">
                  joaosiqueira@gmail.com
                </td>
                <td className="px-6 py-4">
                 (51) 99936-7543
                </td>
                <td className="px-6 py-4 flex space-x-6">
                    <a href="#"><PencilSimple className="inline-block w-5 h-5"/></a>
                    <a href="#"><TrashSimple className="inline-block w-5 h-5"/></a>
                </td>
              </tr>
            <tr className="odd:bg-white even:bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                  João da Silva Siqueira
                </th>
                <td className="px-6 py-4">
                  055.373.570-54
                </td>
                <td className="px-6 py-4">
                  joaosiqueira@gmail.com
                </td>
                <td className="px-6 py-4">
                 (51) 99936-7543
                </td>
                <td className="px-6 py-4 flex space-x-6">
                    <a href="#"><PencilSimple className="inline-block w-5 h-5"/></a>
                    <a href="#"><TrashSimple className="inline-block w-5 h-5"/></a>
                </td>
              </tr>
            <tr className="odd:bg-white even:bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                  João da Silva Siqueira
                </th>
                <td className="px-6 py-4">
                  055.373.570-54
                </td>
                <td className="px-6 py-4">
                  joaosiqueira@gmail.com
                </td>
                <td className="px-6 py-4">
                 (51) 99936-7543
                </td>
                <td className="px-6 py-4 flex space-x-6">
                    <a href="#"><PencilSimple className="inline-block w-5 h-5"/></a>
                    <a href="#"><TrashSimple className="inline-block w-5 h-5"/></a>
                </td>
              </tr>
            <tr className="odd:bg-white even:bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                  João da Silva Siqueira
                </th>
                <td className="px-6 py-4">
                  055.373.570-54
                </td>
                <td className="px-6 py-4">
                  joaosiqueira@gmail.com
                </td>
                <td className="px-6 py-4">
                 (51) 99936-7543
                </td>
                <td className="px-6 py-4 flex space-x-6">
                    <a href="#"><PencilSimple className="inline-block w-5 h-5"/></a>
                    <a href="#"><TrashSimple className="inline-block w-5 h-5"/></a>
                </td>
              </tr>
            <tr className="odd:bg-white even:bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                  João da Silva Siqueira
                </th>
                <td className="px-6 py-4">
                  055.373.570-54
                </td>
                <td className="px-6 py-4">
                  joaosiqueira@gmail.com
                </td>
                <td className="px-6 py-4">
                 (51) 99936-7543
                </td>
                <td className="px-6 py-4 flex space-x-6">
                    <a href="#"><PencilSimple className="inline-block w-5 h-5"/></a>
                    <a href="#"><TrashSimple className="inline-block w-5 h-5"/></a>
                </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                  João da Silva Siqueira
                </th>
                <td className="px-6 py-4">
                  055.373.570-54
                </td>
                <td className="px-6 py-4">
                  joaosiqueira@gmail.com
                </td>
                <td className="px-6 py-4">
                 (51) 99936-7543
                </td>
                <td className="px-6 py-4 flex space-x-6">
                    <a href="#"><PencilSimple className="inline-block w-5 h-5"/></a>
                    <a href="#"><TrashSimple className="inline-block w-5 h-5"/></a>
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                  João da Silva Siqueira
                </th>
                <td className="px-6 py-4">
                  055.373.570-54
                </td>
                <td className="px-6 py-4">
                  joaosiqueira@gmail.com
                </td>
                <td className="px-6 py-4">
                 (51) 99936-7543
                </td>
                <td className="px-6 py-4 flex space-x-6">
                    <a href="#"><PencilSimple className="inline-block w-5 h-5"/></a>
                    <a href="#"><TrashSimple className="inline-block w-5 h-5"/></a>
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                  João da Silva Siqueira
                </th>
                <td className="px-6 py-4">
                  055.373.570-54
                </td>
                <td className="px-6 py-4">
                  joaosiqueira@gmail.com
                </td>
                <td className="px-6 py-4">
                 (51) 99936-7543
                </td>
                <td className="px-6 py-4 flex space-x-6">
                    <a href="#"><PencilSimple className="inline-block w-5 h-5"/></a>
                    <a href="#"><TrashSimple className="inline-block w-5 h-5"/></a>
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                  João da Silva Siqueira
                </th>
                <td className="px-6 py-4">
                  055.373.570-54
                </td>
                <td className="px-6 py-4">
                  joaosiqueira@gmail.com
                </td>
                <td className="px-6 py-4">
                 (51) 99936-7543
                </td>
                <td className="px-6 py-4 flex space-x-6">
                    <a href="#"><PencilSimple className="inline-block w-5 h-5"/></a>
                    <a href="#"><TrashSimple className="inline-block w-5 h-5"/></a>
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                  João da Silva Siqueira
                </th>
                <td className="px-6 py-4">
                  055.373.570-54
                </td>
                <td className="px-6 py-4">
                  joaosiqueira@gmail.com
                </td>
                <td className="px-6 py-4">
                 (51) 99936-7543
                </td>
                <td className="px-6 py-4 flex space-x-6">
                    <a href="#"><PencilSimple className="inline-block w-5 h-5"/></a>
                    <a href="#"><TrashSimple className="inline-block w-5 h-5"/></a>
                </td>
              </tr>
        </tbody>
    </table>
</div>

 </div>
 </div>
  )
}
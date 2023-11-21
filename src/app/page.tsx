"use client"

import Image from 'next/image'

export default function Home() {

  let jogador = `X`;

  function marcar(td: any) {
    if (td.innerHTML == "") {
      td.innerHTML = jogador;

      if (jogador == "X") {
        jogador = "O";
      } else {
        jogador = "X"
      }
    } else {
      alert("Jogou no lugar errado.")
    }

  }

  return (
    <>
      <header></header>
      <main className='text-center text-6xl font-bold'>
        <h1>Jogo da Velha</h1>
        <br/>
        <table className='flex justify-center text-center'>
          <tbody>
            <tr>
              <td onClick={(td)=> marcar(td.target)} className='border-2 border-black w-[100px] h-[100px] hover:bg-white'></td>
              <td onClick={(td)=> marcar(td.target)} className='border-2 border-black w-[100px] h-[100px] hover:bg-white'></td>
              <td onClick={(td)=> marcar(td.target)} className='border-2 border-black w-[100px] h-[100px] hover:bg-white'></td>
            </tr>
            <tr>
              <td onClick={(td)=> marcar(td.target)} className='border-2 border-black w-[100px] h-[100px] hover:bg-white'></td>
              <td onClick={(td)=> marcar(td.target)} className='border-2 border-black w-[100px] h-[100px] hover:bg-white'></td>
              <td onClick={(td)=> marcar(td.target)} className='border-2 border-black w-[100px] h-[100px] hover:bg-white'></td>
            </tr>
            <tr>
              <td onClick={(td)=> marcar(td.target)} className='border-2 border-black w-[100px] h-[100px] hover:bg-white'></td>
              <td onClick={(td)=> marcar(td.target)} className='border-2 border-black w-[100px] h-[100px] hover:bg-white'></td>
              <td onClick={(td)=> marcar(td.target)} className='border-2 border-black w-[100px] h-[100px] hover:bg-white'></td>
            </tr>
          </tbody>
        </table>

      </main>

    </>
  )
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className='flex flex-row'>
      <div className='basis-1/2'>1</div>
      <div className='basis-1/2'>2</div>
      <div className='basis-1/2'>3</div>
      <div className='basis-1/2'>4</div>
      </div>

      <div className=' border border-indigo-600 hover:border-t-4'>Rounded</div>
      <p className='font-mono-bold text-5xl text-center text-red-600/75 hover:text-blue-600/100'>FELIX</p>
      <p className='font-mono-bold text-2xl text-blue-600/75 hover:text-yellow-600/100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae cupiditate necessitatibus ab natus atque nemo nihil neque voluptates facilis. Pariatur impedit accusamus alias illum ullam placeat ratione autem eos? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse placeat commodi, asperiores soluta incidunt illo facilis cum repellat odit! Iusto eligendi maiores sit cumque repudiandae voluptates pariatur sed commodi</p>
    </>
  )
}

export default App

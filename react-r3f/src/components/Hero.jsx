import Configurator from './Configurator'
import { ConfiguratorContext } from './ConfiguratorContext';
import Scene from './three/Scene'
import { useState, createContext } from "react";


export default function Hero() {

  const [configProps, setConfigProps] = useState({
    rotate: true,
    colour: 0xBFAA9F,
    fourLegs: true 
  });

  return (
    <div className='h-[100vh] w-[100vw] overflow-hidden bg-slate-200'>
      <div className=' w-full h-full max-w-[1600px] mx-auto flex '>
        <ConfiguratorContext.Provider value={{ configProps, setConfigProps}}>
          <div className='w-[33%] h-full pl-4'>
            <Configurator />
          </div>
          <div className='w-[67%] h-full'>
            <Scene />
          </div>
        </ConfiguratorContext.Provider>
      </div>
      <img src='esc-w.svg'
        className='fixed top-10 right-10 cursor-pointer'
      />
    </div>
  )
}

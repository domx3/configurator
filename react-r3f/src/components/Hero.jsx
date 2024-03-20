import Configurator from './Configurator'
import { ConfiguratorContext } from './ConfiguratorContext';
import Expander from './Expander';
import Scene from './three/Scene'
import { useState, createContext } from "react";


export default function Hero() {

  const [configProps, setConfigProps] = useState({
    rotate: true,
    speed: 50,
    material: 'fabric',
    colour: 0xBFAA9F,
    fourLegs: true 
  });

  const [expanded, setExpanded] = useState(false);

  return (
    <div className='h-[100vh] w-[100vw] overflow-hidden bg-slate-200'>
      <div className=' w-full h-full max-w-[1340px] mx-auto flex '>
        <ConfiguratorContext.Provider value={{ configProps, setConfigProps}}>
          <div className={expanded ? 'configurator-div configurator-expanded' : 'configurator-div'}>
            <Configurator />
          </div>
          { expanded ? 
            <div
              key={expanded} 
              className='expander expander-right'
              onClick={()=>{setExpanded(!expanded)}}
            >
              <Expander 
                shapeBg="#e2e8f0"
                circleBg="#cbd5e1"
              />
            </div>
            :
            <div 
              className='expander expander-left'
              onClick={()=>{setExpanded(!expanded)}}
            >
              <Expander
                classStyle="flip-svg" 
                shapeBg="#cbd5e1"
                circleBg="#e2e8f0"
              />
            </div>
          }
          <div className=' scene-div'>
            <Scene />
          </div>
        </ConfiguratorContext.Provider>
      </div>
      
    </div>
  )
}

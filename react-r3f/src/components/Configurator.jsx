import { useContext, useState } from 'react';
import { ConfiguratorContext } from './ConfiguratorContext';
import ConfigRotate from './configs/ConfigRotate';
import ConfigColors from './configs/ConfigColors';
import ConfigLegs from './configs/configLegs';


export default function Configurator() {
  
  return (
    <div className=' w-full h-full'>
      <h1 className='mt-8 text-3xl font-bold'>Configurator</h1>
      <ConfigRotate />
      <ConfigColors />
      <ConfigLegs />

    </div>
  )
}

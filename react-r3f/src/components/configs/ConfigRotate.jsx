import { useContext, useState } from 'react';
import { ConfiguratorContext } from '../ConfiguratorContext';


export default function ConfigRotate() {

  const {configProps, setConfigProps} = useContext(ConfiguratorContext)
  const [rotate, setRotate] = useState(true)

  const changeRotate = () => {
    setRotate(!rotate)
    setConfigProps((prev)=>({
      ...prev,
      rotate: !prev.rotate
    }))
  }

  return (
    <>
    <h2 className='mt-12 ml-4 font-bold text-xl'>Rotate</h2>
      <input type='checkbox' 
        checked={rotate} 
        onChange={changeRotate}
        className='mt-8 ml-12 cursor-pointer'
      />
    </>
  )
}

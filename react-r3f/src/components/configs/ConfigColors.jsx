import { useContext, useState } from 'react';
import { ConfiguratorContext } from '../ConfiguratorContext';
import SwitchSelector from "react-switch-selector";

const selectColours = {
  white: 0xBFAA9F,
  blue: 0x4F6268,
  red: 0x684238,
  yellow: 0x8C8B5A,
  dark: 0x2A2B2D
}

function transformHex(hex) {
  let hexString = hex.toString(16);
  return '#' + hexString.toUpperCase();
}

export default function ConfigColors() {

  const {configProps, setConfigProps} = useContext(ConfiguratorContext)

  const [activeColor, setActiveColor] = useState("white")

  const changeColour = (key) => {
    setActiveColor(key)
    setConfigProps((prev)=>({
      ...prev,
      colour: selectColours[key]
    }))
  }

  return (
    <>
      <h2 className='mt-12 ml-4 font-bold text-xl'>Colour</h2>
      <div className='flex justify-start ml-12 mr-6 items-center gap-8 mt-8' >
      { Object.keys(selectColours).map((key)=>(
        <div key={key}
          className={`bg-[${transformHex(selectColours[key])}] color-select ${key === activeColor ? "active-color" : ""}`} 
          onClick={() => changeColour(key)}
          style={{ border: key === activeColor ? '4px solid white' : 'none'}}
        >
        </div>
      ))

      }
{/*         <div id="white" className=' bg-[#BFAA9F] color-select' 
          onClick={()=> changeColour(0xBFAA9F)}>
            style={{ border: id === lastClicked ? '2px solid red' : 'none'}}
        </div>
        <div className='bg-[#4F6268] color-select' onClick={()=> changeColour(0x4F6268)}></div>
        <div className='bg-[#684238] color-select' onClick={()=> changeColour(0x684238)}></div>
        <div className='bg-[#8C8B5A] color-select' onClick={()=> changeColour(0x8C8B5A)}></div>
        <div className='bg-[#2A2B2D] color-select' onClick={()=> changeColour(0x2A2B2D)}></div> */}
      </div>
    </>
  )
}

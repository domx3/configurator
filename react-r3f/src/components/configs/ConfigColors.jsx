import { useContext, useEffect, useState } from 'react';
import { ConfiguratorContext } from '../ConfiguratorContext';

const selectColours = {
  fabric: {
    light: 0x8C8B5A,
    blue: 0x4F6268,
    first: 0xCEC1CA,
    yellow: 0x6B0D0D,
    dark: 0x534A4C 
  },
  leather: {
    light: 0xe4bda2,
    first: 0x5f361b,
    dark: 0x060301
  }
}

function transformHex(hex) {
  let hexString = hex.toString(16);
  return '#' + hexString.toUpperCase();
}

export default function ConfigColors() {

  const {configProps, setConfigProps} = useContext(ConfiguratorContext)

  const [activeColor, setActiveColor] = useState("first")

  const colorSelection = selectColours[configProps.material]

  useEffect(()=> {
    changeColour("first")
  }, [configProps.material])

  const changeColour = (key) => {
    setActiveColor(key)
    setConfigProps((prev)=>({
      ...prev,
      colour: colorSelection[key]
    }))
  }

  return (
    <>
      <h2 className='mt-12 ml-4 font-bold text-xl'>Colour</h2>
      <div className='flex justify-start ml-12 mr-6 items-center gap-8 mt-8' >
        { Object.keys(colorSelection).map((key)=>(
          <div key={key}
            className={`color-select ${key === activeColor ? "active-color" : ""}`} 
            onClick={() => changeColour(key)}
            style={{ 
              border: key === activeColor ? '4px solid white' : 'none',
              backgroundColor: transformHex(colorSelection[key])
            }}
          >
          </div>
        ))
        }
      </div>
    </>
  )
}


//bg-[${transformHex(colorSelection[key])}]
import { useContext, useState } from 'react';
import { ConfiguratorContext } from '../ConfiguratorContext';
import ReactSlider from "react-slider";


export default function ConfigRotate() {

  const {configProps, setConfigProps} = useContext(ConfiguratorContext)
  const [rotate, setRotate] = useState(true)
  const [speed, setSpeed] = useState(55)

  const changeRotate = () => {
    setRotate(!rotate)
    setConfigProps((prev)=>({
      ...prev,
      rotate: !prev.rotate
    }))
  }

  const changeSpeed = (val) => {
    setSpeed(val)
    setConfigProps((prev)=>({
      ...prev,
      speed: val
    }))
  }

  return (
    <>
    <h2 className='mt-12 ml-4 font-bold text-xl'>Rotate</h2>
    <div className='flex justify-start items-center mt-8 gap-8'>
      <div
        className='ml-12 cursor-pointer w-6 h-6 rounded-lg border-2 border-solid border-slate-950 flex items-center justify-center p-1 bg-white hover:bg-slate-300'
        onClick={changeRotate}
      >
        {rotate &&
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26.458 26.458"
          >
            <path d="M3.887 14.387c-1.897-1.668-4.985 1.98-3.494 6.79.772 2.41 11.238 6.8 13.398 4.753C15.951 23.883 27.925 1.395 26.307.063S13.735 19.009 11.79 19.431c-1.946.422-6.005-3.376-7.903-5.044z" />
          </svg>
        }
      </div>
      { rotate && 
        <ReactSlider 
          className="customSlider"
          trackClassName="customSlider-track"
          thumbClassName="customSlider-thumb"
          min={10}
          max={100}
          defaultValue={55}
          value={speed}
          marks={[55]}
          markClassName="customSlider-mark"
          onChange={(value) => changeSpeed(value)}
        />
      }
      </div>
    </>
  )
}

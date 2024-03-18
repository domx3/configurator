import { useContext, useState } from 'react';
import { ConfiguratorContext } from '../ConfiguratorContext';
import SwitchSelector from "react-switch-selector";

const switchColor = "#8E7347"
const switchOptions = [
  {
      label: "Four",
      value: true,
      selectedBackgroundColor: switchColor,
  },
  {
      label: "Three",
      value: false,
      selectedBackgroundColor: switchColor
  }
];

export default function ConfigLegs() {

  const {configProps, setConfigProps} = useContext(ConfiguratorContext)

  const changeLegs = (lgs) => {
    setConfigProps((prev)=>({
      ...prev,
      fourLegs: lgs
    }))
  }

  return (
    <>
      <h2 className='mt-12 ml-4 font-bold text-xl'>Legs</h2>
      <div className='mt-8 w-[80%] mx-auto font-medium'>
        <SwitchSelector
          onChange={(newVal) => changeLegs(newVal) }
          options={switchOptions}
          //initialSelectedIndex={initialSelectedIndex}
          backgroundColor={"white"}
          fontColor={"#000"}
          fontSize={18}
        />
      </div>
    </>
  )
}

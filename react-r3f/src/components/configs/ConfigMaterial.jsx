import React, { useContext } from 'react'
import { ConfiguratorContext } from '../ConfiguratorContext'
import Select from 'react-select'

const options = [
  { value: 'fabric', label: 'Fabric' },
  { value: 'leather', label: 'Leather' }
]

export default function ConfigMaterial() {
  
  const {configProps, setConfigProps} = useContext(ConfiguratorContext)

  const changeMaterial = (val) => {
    setConfigProps((prev)=>({
      ...prev,
      material: val
    }))
  }

  return (
    <>
      <h2 className='mt-12 ml-4 font-bold text-xl'>Material</h2>
      <div className='mt-8 w-[80%] mx-auto font-medium'>
        <Select options={options} defaultValue={options[0]}  onChange={(selected) => {changeMaterial(selected.value)}}/>
      </div>
    </>
  )
}
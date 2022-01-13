import styled from 'styled-components'
import { useInputContext } from '../context/input_context'
import { InputElement } from '.'

const Input = () => {
  const { setImport } = useInputContext()
  return (
    <InputWrapper>
      <h1>Input data</h1>
      <InputElement type='porosity' label='Porosity (%)' />
      <InputElement type='viscosity' label='Viscosity (cP)' />
      <InputElement type='effectiveThickness' label='EffectiveThickness (m)' />
      <InputElement type='fvf' label='FVF (m3/m3)' />
      <InputElement
        type='totalCompressibility'
        label='Total compressibility (1/atm)'
      />
      <InputElement type='wellRadius' label='Well radius (mm)' />
      <InputElement type='rate' label='Flowing rate (m3/day)' />
      <label htmlFor='file' className='file'>
        Import Pressure data
      </label>
      <input id='file' type='file' accept='.xlsx' onChange={setImport} hidden />
    </InputWrapper>
  )
}

const InputWrapper = styled.form`
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: 1rem;
  background: #c8c8c8;
  padding: 1rem;

  h1 {
    margin: auto;
  }

  .file {
    width: max-content;
    padding: 0.8rem;
    margin: auto;
    background: green;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
`

export default Input

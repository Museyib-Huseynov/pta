import styled from 'styled-components'
import { useInputContext } from '../context/input_context'
import { InputElement } from '.'

const Input = () => {
  const { setImport } = useInputContext()
  return (
    <InputWrapper>
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
      <input type='file' accept='.xlsx' onChange={setImport} />
    </InputWrapper>
  )
}

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
`

export default Input

import { useInputContext } from '../context/input_context'

const InputElement = ({ type, label }) => {
  const { setInput, ...state } = useInputContext()
  return (
    <>
      <label htmlFor={type}>{label}</label>
      <input
        type='number'
        id={type}
        name={type}
        value={state[type]}
        onChange={setInput}
      />
    </>
  )
}

export default InputElement

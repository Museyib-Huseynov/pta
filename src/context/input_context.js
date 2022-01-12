import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/input_reducer'
import { SET_INPUT, SET_IMPORT } from '../actions'
import readXlsxFile from 'read-excel-file'

const initialState = {
  porosity: 0,
  viscosity: 0,
  totalCompressibility: 0,
  wellRadius: 0,
  fvf: 0,
  effectiveThickness: 0,
  flowingWellborePressure: 0,
  rate: 0,
  importedData: [],
}

const InputContext = React.createContext()

const InputProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setInput = (e) => {
    const value = +e.target.value
    const name = e.target.name
    dispatch({ type: SET_INPUT, payload: { name, value } })
  }

  const setImport = (e) => {
    readXlsxFile(e.target.files[0]).then((rows) => {
      dispatch({ type: SET_IMPORT, payload: rows })
    })
  }

  return (
    <InputContext.Provider value={{ ...state, setInput, setImport }}>
      {children}
    </InputContext.Provider>
  )
}

const useInputContext = () => {
  return useContext(InputContext)
}

export { InputProvider, useInputContext }

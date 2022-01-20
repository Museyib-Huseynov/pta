import { Home } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PressureTime from './charts/PressureTime'
import { useInputContext } from './context/input_context'

function App() {
  const { importedData } = useInputContext()
  const MDH_data = importedData.map((item) => [Math.log10(item[0]), item[1]])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route
            index
            element={
              <main
                style={{
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <h2>Select a method for calculation</h2>
              </main>
            }
          />
          <Route
            path='mdh'
            element={
              <PressureTime
                data={MDH_data}
                type='MDH method'
                xAxisName='Log(Δt)'
              />
            }
          />
          <Route
            path='horner'
            element={
              <PressureTime
                data={MDH_data}
                type='MDH method'
                xAxisName='Log(Δt)'
              />
            }
          />
          <Route
            path='agarwal'
            element={
              <PressureTime
                data={MDH_data}
                type='MDH method'
                xAxisName='Log(Δt)'
              />
            }
          />
        </Route>
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>Oops! There is nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

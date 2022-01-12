import { Home } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
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
    </div>
  )
}

export default App

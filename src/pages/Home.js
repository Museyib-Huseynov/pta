import { useRef, useEffect } from 'react'
import { Input } from '../components'
import styled from 'styled-components'
import { useInputContext } from '../context/input_context'
import PressureTime from '../charts/PressureTime'

const Home = () => {
  const { importedData } = useInputContext()

  return (
    <HomeWrapper>
      <Input />
      {importedData.length !== 0 && (
        <div style={{ position: 'relative', width: '600px' }}>
          <PressureTime data={importedData} />
          <PressureTime data={importedData} type='logarithmic' />
        </div>
      )}
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 350px auto;

  .pie {
    position: relative;
    height: 300px;
    width: 300px;
  }

  .chart-container {
    position: relative;
    height: 600px;
    width: 600px;
  }
`
export default Home

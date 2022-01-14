import { useRef, useEffect } from 'react'
import { Input } from '../components'
import styled from 'styled-components'
import { useInputContext } from '../context/input_context'
import Chart from 'chart.js/auto'
import { getRelativePosition } from 'chart.js/helpers'

const Home = () => {
  const canvasElement = useRef(null)
  const { importedData } = useInputContext()

  useEffect(() => {
    if (importedData.length !== 0) {
      const data = {
        datasets: [
          {
            label: 'Pressure vs time',
            data: importedData,
            backgroundColor: 'green',
            fill: false,
            // borderColor: 'rgb(75, 192, 192)',
            tension: 0,
          },
        ],
      }

      const config = {
        type: 'scatter',
        data: data,
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              ticks: { color: 'blue' },
            },
          },
          onClick: (e) => {
            const canvasPosition = getRelativePosition(e, myChart)
            console.log(canvasPosition)
            // Substitute the appropriate scale IDs
            const dataX = myChart.scales.x.getValueForPixel(canvasPosition.x)
            const dataY = myChart.scales.y.getValueForPixel(canvasPosition.y)
            console.log(dataX, dataY)
          },
        },
      }
      const myChart = new Chart(canvasElement.current, config)
      return () => myChart.destroy()
    }
  }, [importedData])

  return (
    <HomeWrapper>
      <Input />
      {importedData.length !== 0 && (
        <div className='chart-container'>
          <canvas id='chart' ref={canvasElement}></canvas>
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

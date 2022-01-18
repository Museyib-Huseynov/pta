import { Chart, registerables } from 'chart.js'
import { getRelativePosition } from 'chart.js/helpers'
import { Scatter, Chart as ChartReact } from 'react-chartjs-2'
import { useRef } from 'react'
import regression from 'regression'

function PressureTime(props) {
  const chartRef = useRef(null)

  Chart.register(...registerables)

  const data = {
    datasets: [
      {
        type: 'scatter',
        label: 'Pressure vs time',
        data: props.data,
        backgroundColor: 'green',
      },
    ],
  }

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time, sec',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Pressure, atm',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          boxHeight: 5,
          boxWidth: 5,
          font: {
            weight: 'bold',
          },
        },
      },
      tooltip: {
        // enabled: false,
      },
    },
    onClick: (e) => {
      if (chartRef.current) {
        const canvasPosition = getRelativePosition(e, chartRef.current)
        const dataX = chartRef.current.scales.x.getValueForPixel(
          canvasPosition.x
        )
        const dataY = chartRef.current.scales.y.getValueForPixel(
          canvasPosition.y
        )
        console.log(dataX, dataY)
        const regressionArray = []
        for (let item of props.data) {
          if (item[1] >= dataY) {
            regressionArray.push(item)
          }
        }
        console.log(regressionArray)
        const result = regression.linear(regressionArray)
        console.log(result)
        const second_data = {
          type: 'line',
          label: 'regression',
          data: result.points.map((i) => i[1]),
          backgroundColor: 'black',
        }
        if (chartRef.current.data.datasets.length > 1) {
          chartRef.current.data.datasets.pop()
        }
        chartRef.current.data.datasets.push(second_data)
        chartRef.current.data.labels = result.points.map((i) => i[0])
        chartRef.current.update()
      }
    },
  }

  if (props.type) {
    // options.scales.x.type = 'logarithmic'
  }
  return <ChartReact options={options} data={data} ref={chartRef} />
}

export default PressureTime

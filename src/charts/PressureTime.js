import { Chart, registerables } from 'chart.js'
import { getRelativePosition } from 'chart.js/helpers'
import { Scatter } from 'react-chartjs-2'
import { useRef } from 'react'
import regression from 'regression'

function PressureTime(props) {
  const chartRef = useRef(null)

  Chart.register(...registerables)

  const data = {
    datasets: [
      {
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
        enabled: false,
      },
    },
    onClick: (e) => {
      if (chartRef.current) {
        const canvasPosition = getRelativePosition(e, chartRef.current)
        const dataX = chartRef.current.scales.x.getValueForPixel(
          canvasPosition.x
        )
        console.log(dataX)

        const regressionArray = []
        for (let item of props.data) {
          if (item[0] >= dataX) {
            regressionArray.push(item)
          }
        }
        console.log(regressionArray)

        const result = regression.linear(regressionArray)
        console.log(result)

        const second_data = {
          label: 'regression',
          data: result.points,
          backgroundColor: 'black',
        }
        if (chartRef.current.data.datasets.length > 1) {
          chartRef.current.data.datasets.pop()
        }
        chartRef.current.data.datasets.push(second_data)
        chartRef.current.update()
      }
    },
  }

  if (props.type) {
    // options.scales.x.type = 'logarithmic'
  }
  return <Scatter options={options} data={data} ref={chartRef} />
}

export default PressureTime

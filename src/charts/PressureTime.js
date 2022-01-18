import { Chart } from 'chart.js/auto'
import { getRelativePosition } from 'chart.js/helpers'
import { Scatter } from 'react-chartjs-2'

function PressureTime(props) {
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
        // enabled: false,
      },
    },
    onClick: (e) => {
      const canvasPosition = getRelativePosition(e, this)

      // Substitute the appropriate scale IDs
      const dataX = Scatter.scales.x.getValueForPixel(canvasPosition.x)
      const dataY = this.scales.y.getValueForPixel(canvasPosition.y)
      console.log(dataX, dataY)
    },
  }

  if (props.type) {
    options.scales.x.type = 'logarithmic'
  }
  return <Scatter options={options} data={data} />
}

export default PressureTime

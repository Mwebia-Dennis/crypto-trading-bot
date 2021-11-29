import React from 'react'
import { Line } from 'react-chartjs-2';

export default function Chart(props) {

    const { _data, labels } = props

    const counter = 30
    const _predictedData = []
    for (let index = 0; index < counter; index++) {
            
        _predictedData.push(Math.floor(Math.random() * 50000) + 40000)
    }
    const data = {
        labels: labels,//[...Array(counter).keys()],
        datasets: [
          {
            label: 'Market Close',
            data: _data,
            fill: true,
            backgroundColor: 'rgba(255, 102, 102, .3)',
            borderColor: 'rgba(255, 102, 102, 1)',
            borderWidth: 1
          },
          // {
          //   label: 'Predicted Price',
          //   data: _predictedData,
          //   fill: false,
          //   // backgroundColor: 'rgb(255, 99, 132)',
          //   borderColor: '#3399ff',
          //   borderWidth: 1
          // },
        ],
      };



    return (
        
        <Line data={data} style={{width: '100%'}} />
    )
}

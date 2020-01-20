import React, { Component } from 'react'
import { Chart } from 'react-charts'

function MyReactChart() {
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [
                    {x: 'Sep 2019', y: 80000189}, 
                    {x: 'Sep 2019', y: 80000191}, 
                    {x: 'Sep 2019', y: 80000392}, 
                    {x: 'Sep 2019', y: 80007709}, 
                    {x: 'Sep 2019', y: 80008235},
                    {x: 'Sep 2019', y: 80010095}, 
                    {x: 'Sep 2019', y: 80010696}, 
                    {x: 'Sep 2019', y: 80011301}, 
                    {x: 'Sep 2019', y: 80011866}, 
                    {x: 'Sep 2019', y: 80012109},
                ]
            }],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ],
        []
    )

    const options = React.useMemo(
        () => [
            {
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    displayFormats: {
                       'millisecond': 'MMM DD',
                       'second': 'MMM DD',
                       'minute': 'MMM DD',
                       'hour': 'MMM DD',
                       'day': 'MMM DD',
                       'week': 'MMM DD',
                       'month': 'MMM DD',
                       'quarter': 'MMM DD',
                       'year': 'MMM DD',
                    }
                }
            }]
        }
    }
        ],
        []
    )

    return (
        <div 
            className="container"
            style={{
                width: '700px',
                height: '200px'
            }}
        >
            <h2>React Chart View</h2>
            <Chart data={data} axes={axes} options={options}/>
            <h5>Dashboard Contents</h5>
        </div>
    )
}

export default MyReactChart
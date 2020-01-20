import React, { Component } from 'react'
import Chart from "react-apexcharts";

class ApexChart extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1983, 2004, 1992, 2010, 2009, 1996, 1997, 2005, 1989, 2011, 1993, 1995, 2002, 2003, 2012]
            }
          },
          series: [
            {
              name: "NODE_ID",
              data: [85004927, 55077604, 85004930, 55019769, 85008433, 200126789, 85008436, 101500072, 200802961, 30019749, 45000132, 65606447]
            }
          ]
        };
    }

    render() {
        return (
            <div className="container">
                <h2>Apex Chart View (Against Nodes)</h2>
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="bar"
                  width="900"
                />
                
            </div>
        );
    }
}

export default ApexChart
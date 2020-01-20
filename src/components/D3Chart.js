import React, { Component } from 'react'
import * as d3 from 'd3'

class D3Chart extends Component {
    componentDidMount() {
        const data = [ 1983, 2004, 1992, 2010, 2009, 1996, 1997, 2005, 1989, 2011, 1993, 1995, 2002, 2003, 2012 ]
        this.drawChart(data)
    }
    drawChart(data)  {
        const canvasHeight = 500
        const canvasWidth = 700
        const scale = 0.2
        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            .style("border", "1px solid black")
        svgCanvas.selectAll("rect")
            .data(data).enter()
                .append("rect")
                .attr("width", 40)
                .attr("height", (datapoint) => datapoint * scale)
                .attr("fill", "orange")
                .attr("x", (datapoint, iteration) => iteration * 45)
                .attr("y", (datapoint) => canvasHeight - datapoint * scale)
        svgCanvas.selectAll("text")
            .data(data).enter()
                .append("text")
                .attr("x", (dataPoint, i) => i * 45 + 10)
                .attr("y", (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
                .text(dataPoint => dataPoint)
    }
    render() {
        return (
            <div className="container">
                <h2>D3 Chart View (Incorporation DATE)</h2>
                <div ref="canvas"></div>
            </div>
        );
    }
}

export default D3Chart
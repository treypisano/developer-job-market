import Example from "./scripts/example"
import Histogram from "./scripts/histogram"
import * as d3 from "d3";
let testUrl = "http://api.adzuna.com/v1/api/jobs/gb/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&location0=UK&location1=London&what=finance%20officer&content-type=application/json"

const width = 500
const length = 500

document.addEventListener("DOMContentLoaded", () => {
    let testHistogram = new Histogram()
     // makes ivars with data
    console.log("Hello world")
    testHistogram.getHistogramData().then(val => console.log(val))

    d3.select('#histogram').append('svg')
        .attr('width', width)
        .attr('length', length)
        .style('background', '#dff0d8')
        .selectAll('rect').data([4,5,6,7,8,9])
        .enter().append('rect')
        .attr('width', 200)
        .attr('height', function (data) {
            return data;
        })
        .attr('x', function (data, i) {
            return i * (200 + 0);
        })
        .attr('y', function (data) {
            return height - data;
        });
})

// For now i will put the bar chart in here
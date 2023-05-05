import Example from "./scripts/example"
import Histogram from "./scripts/histogram"
import * as d3 from "d3";
let testUrl = "http://api.adzuna.com/v1/api/jobs/gb/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&location0=UK&location1=London&what=finance%20officer&content-type=application/json"

document.addEventListener("DOMContentLoaded", () => {
    // debugger
    let testHistogram = new Histogram()
    console.log("Hello world")
    console.log(testHistogram)

        // .then (val => console.log(val))
    // testHistogram.dataPoints.then(value => {
    //     console.log(Object.keys(value.histogram))   
    // })
})

// For now i will put the bar chart in here
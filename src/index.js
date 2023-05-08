import * as d3 from "d3";
import * as Histogram from "./scripts/histogram"
let testUrl = "http://api.adzuna.com/v1/api/jobs/gb/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&location0=UK&location1=London&what=finance%20officer&content-type=application/json"

document.addEventListener("DOMContentLoaded", () => {
    console.log("hello world")
    Histogram.fetchHistoData(testUrl)
})



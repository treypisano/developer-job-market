// this is used to fetch and organize json data
let testUrl = "http://api.adzuna.com/v1/api/jobs/gb/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&location0=UK&location1=London&what=finance%20officer&content-type=application/json"
import * as d3 from "d3";   
// Look like the getch is returning the API object?

class Histogram {

    constructor() {
        
        this.xValues = null
        this.yValues = null
        debugger
        getHistogramData().then(val => {
            this.xValues = Object.keys(val.histogram)
            this.yValues = Object.values(val.histogram)
        })
    }

    static WIDTH = 500
    static HEIGHT = 500
    // static x_scale = d3.scaleBand().range([0, width])
    // static y_scale = d3.scaleLinear().range([height, 0])
    // get dataPoints() {
    //     return this.dataPoints
    // 
    
}
async function getHistogramData() {
    // debugger
    const res = await fetch(testUrl, {method: "GET"})
    return res.json()
}


export default Histogram;
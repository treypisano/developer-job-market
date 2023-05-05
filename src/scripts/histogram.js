// this is used to fetch and organize json data
let testUrl = "http://api.adzuna.com/v1/api/jobs/gb/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&location0=UK&location1=London&what=finance%20officer&content-type=application/json"
import * as d3 from "d3";   
// Look like the getch is returning the API object?

class Histogram {
    static WIDTH = 500
    static HEIGHT = 500

    constructor() {
        this.xValues = null
        this.yValues = null
    }

    async getHistogramData() {
        // this is called in index so promise is made in time   
        const res = await fetch(testUrl, {method: "GET"})
        const val = await res.json()
        return [Object.keys(val.histogram), Object.values(val.histogram)]
    }
}





export default Histogram;
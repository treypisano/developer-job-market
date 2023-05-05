// this is used to fetch and organize json data
let testUrl = "http://api.adzuna.com/v1/api/jobs/gb/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&location0=UK&location1=London&what=finance%20officer&content-type=application/json"

class Histogram {

    constructor() {
        this.dataPoints = getHistogramData()
    }

    // get dataPoints() {
    //     return this.dataPoints
    // }

    
}

async function getHistogramData() {
    const response = await fetch(testUrl, {
        method: "GET"
        // mode: "no-cors"
    })
    
    const jsonData = await response.json();
    return jsonData;
}

export default Histogram;
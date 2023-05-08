import * as d3 from "d3";
import * as Histogram from "./scripts/histogram"
import NavBar from "./scripts/navbar";
let testUrl = "http://api.adzuna.com/v1/api/jobs/gb/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&location0=UK&location1=London&what=finance%20officer&content-type=application/json"


document.addEventListener("DOMContentLoaded", () => {
    Histogram.makeChart(testData)
    makeNavLinksClickable()
    
})

function makeNavLinksClickable(){
    const navLinks = document.querySelectorAll("p") 
    navLinks.forEach(link => {
        new NavBar(link)
    })
}












const testData = {
    "__CLASS__": "Adzuna::API::Response::SalaryHistogram",
    "location": {
        "display_name": "London, UK",
        "__CLASS__": "Adzuna::API::Response::Location",
        "area": [
            "UK",
            "London"
        ]
    },
    "histogram": {
        "10000": 1,
        "20000": 111,
        "30000": 121,
        "40000": 58,
        "50000": 24,
        "60000": 34,
        "70000": 110
    }
}
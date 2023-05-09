import * as d3 from "d3";
import * as Histogram from "./scripts/histogram"
import NavBar, { loadInfoBar } from "./scripts/navbar";
let rubyUrl = "https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&what=ruby%20developer"

Histogram.fetchHistoData(rubyUrl)
makeNavLinksClickable()
loadInfoBar("Javascript")

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
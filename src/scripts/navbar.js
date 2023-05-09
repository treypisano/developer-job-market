import * as Histogram from "./histogram"

export default class NavBar {

    constructor (navLink) {
        this.navLink = navLink
        navLink.addEventListener("click", this.clicked.bind(this))
    }

    clicked(event) {
        loadInfoBar(event.target.innerText)
    }

}

export function loadInfoBar(language) {
    deleteOldHisto()
    Histogram.fetchHistoData(makeUrl(language))
    changeTitle(language)
    changeJobInfo(language)
}

function makeUrl(language) {
    let url = `https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&what=${language}%20developer`
    return url
}

function deleteOldHisto(){
    const oldHisto = document.querySelector("svg")
    oldHisto.remove()   
}

function changeTitle(newTitle) {
    let title = document.querySelector("h1")
    title.innerHTML = newTitle
}

function changeJobInfo(language) {
    let salary = document.querySelector("#salary")
    let jobOpenings = document.querySelector("#job-openings")
    let location = document.querySelector("#location")

    salary.innerHTML = `$${averageSalary(language).toLocaleString()}`
    jobOpenings.innerHTML = `${totalJobs(language)}`
}

function averageSalary(language) {
    let url = makeUrl(language)
    let jsonData = JSON.parse(localStorage.getItem(url))
    let numJobs = Object.values(jsonData.histogram)
    let salary = Object.keys(jsonData.histogram)
    let total = 0
    let totalJobs = 0

    for(let i = 0; i < salary.length; i++) {
        total += numJobs[i] * (salary[i])
    }

    let count = 0;

    for(let i = 0; i < numJobs.length; i++)
    {
        totalJobs += numJobs[i]
    }

    return (Math.round(total / totalJobs))
}

function totalJobs(language) {
    let url = makeUrl(language)
    let jsonData = JSON.parse(localStorage.getItem(url))
    let numJobs = Object.values(jsonData.histogram)
    let totalJobs = 0

    for(let i = 0; i < numJobs.length; i++)
    {
        totalJobs += numJobs[i]
    }

    return totalJobs
}


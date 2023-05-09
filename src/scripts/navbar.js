import * as Histogram from "./histogram"

export default class NavBar {

    constructor (navLink) {
        this.navLink = navLink
        navLink.addEventListener("click", this.clicked)
    }

    clicked(event) {
        deleteOldHisto()
        Histogram.fetchHistoData(makeUrl(event.target.innerText))
    }

}

function makeUrl(language) {
    let url = `https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&what=${language}%20developer`
    return url
}

function deleteOldHisto(){
    const oldHisto = document.querySelector("svg")
    console.log(oldHisto)
    oldHisto.remove()
}
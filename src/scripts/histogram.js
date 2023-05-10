import * as d3 from "d3";  
import {loadInfoBar} from "./navbar";
const testUrl = "https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&what=Javascript%20developer"

export function histoTest() {
    console.log("Test works")
} 

export function fetchAndSaveHistoData() {
    // this doesnt work with more than 5 languages, try using await chain
    fetchData(makeUrl("Javascript"))
    fetchData(makeUrl("Ruby"))
    fetchData(makeUrl("Python"))
    fetchData(makeUrl("Java"))
    fetchData(makeUrl("C++"))
}

export function makeUrl(language) {
    let url = `https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&what=${language}%20developer`
    return url
}

async function fetchData(url) {

    if (!localStorage.getItem(url)){
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("Network response was not OK")
            }
            const jsonData = await response.json()
            localStorage.setItem(url, JSON.stringify(jsonData))

            if (url === testUrl) {
                makeChart(jsonData)
                loadInfoBar("Javascript")
            }
            console.log("fetched and saved!")
        } catch(error) {
            console.log("there was an error: ", error)   
        }
    }
    
}

export function appendToXAxis (){
    const newNode = document.createTextNode("test")
    let text = document.querySelectorAll(".x-label")

    text.forEach((textEle) => {
        let textAsInt = parseInt(textEle.innerHTML)
        let topOfRange = textAsInt + 19
        textEle.appendChild(document.createTextNode(` - ${topOfRange.toString()}`))
    })
}

export function makeChart(data) {
    // debugger
    const numJobs = Object.values(data.histogram)
 
    const restructuredData = restructureData(data)
    const margin = {top: 30, right: 30, bottom: 70, left: 60},
        width = 500 - margin.left - margin.right,
        height = 460 - margin.top - margin.bottom;

    const svg = d3.select(".bar-chart")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    let x = d3.scaleBand()
        .range([0, width])
        .domain(restructuredData.map(function(d) { return d.salary ; }))
        .padding(0)

    let xLabel = d3.scaleBand()
        .range([0, width])
        .domain(restructuredData.map(function(d) { return d.salary/1000 ; }))
        .padding(0)
    
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xLabel))
        .selectAll("text")
          .attr("class", "x-label")
          .attr("font-size", 11)
          .style("text-anchor", "end");
 
    let y = d3.scaleLinear()
          .domain([0, Math.max(...numJobs) ])
          .range([ height, 0]);
    
    svg.append("g")
          .call(d3.axisLeft(y));
    
    svg.selectAll("mybar")
        .data(restructuredData)
        .enter()
        .append("rect")
            .attr("x", function(d) {return x(d.salary); })
            .attr("y", function(d) {return y(d.numJobs); })
            .attr("width", x.bandwidth())
            .attr("fill", "#69b3a2")

    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width - 100)
        .attr("y", height + 60)
        .text("Salaries (USD in Thousands)");

    svg.append("text")
        .attr("text-anchor", "end")
        .attr("y", -38)
        .attr("x", -90)
        .attr("transform", "rotate(-90)")
        .text("Number of Job Openings");

    svg.selectAll("rect")
        .transition()
        .duration(600)
        .attr("y", function(d) { return y(d.numJobs); })
        .attr("height", function(d) { return height - y(d.numJobs); })
        .delay(function(d,i){return(i*100)});
      
    appendToXAxis()
}



export function updateBar() {
    
}

function restructureData(data) { // Convert API call to format d3 can parse
    const numJobs = Object.values(data.histogram)
    const salary = Object.keys(data.histogram)
    let newArr = []

    for (let i = 0; i < numJobs.length; i++) {
        let subObj = {"salary": salary[i], "numJobs": numJobs[i]}
        newArr.push(subObj)
    }

    return newArr
}


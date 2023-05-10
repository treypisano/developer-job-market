import { averageSalary } from "./navbar"
import * as Histogram from "./histogram"

export function makeBarGraph() {
    
    const restructuredData = restructureLanguageData()
    // debugger
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
        .domain(restructuredData.map(function(d) { return d.language; }))
        .padding(.2)

    let xLabel = d3.scaleBand()
        .range([0, width])
        .domain(restructuredData.map(function(d) { return d.language ; }))
        .padding(0)
    
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xLabel))
        .selectAll("text")
          .attr("class", "x-label")
          .attr("font-size", 11)
          .style("text-anchor", "end");
 
    let y = d3.scaleLinear()
          .domain([0, findHighestSalary(restructuredData)])
          .range([ height, 0]);
    
    svg.append("g")
          .call(d3.axisLeft(y));
    
    svg.selectAll("mybar")
        .data(restructuredData)
        .enter()
        .append("rect")
            .attr("x", function(d) {return x(d.language); })
            .attr("y", function(d) {return y(d.averageSalary); })
            .attr("width", x.bandwidth())
            .attr("fill", "#69b3a2")


    // svg.append("text")
    //     .attr("text-anchor", "end")
    //     .attr("y", -38)
    //     .attr("x", -90)
    //     .attr("transform", "rotate(-90)")
    //     .text("Salaries (USD in Thousands)");

    svg.selectAll("rect")
        .transition()
        .duration(600)
        .attr("y", function(d) { return y(d.averageSalary); })
        .attr("height", function(d) { return height - y(d.averageSalary); })
        .delay(function(d,i){return(i*100)});
    
}

export function restructureLanguageData() {
    const languages = document.querySelectorAll("p")

    const restructuredData = []

    languages.forEach(languageElement => {
        let newObj = {}
        newObj["language"] = languageElement.innerHTML // this goes to local storage
        newObj["averageSalary"] = averageSalary(languageElement.innerHTML) // this goes to local storage
        restructuredData.push(newObj)
    })

    return restructuredData
}

function findHighestSalary(data) {
    let new_arr = []
    data.forEach(obj => {
        new_arr.push(obj.averageSalary)    
    })
    return Math.ceil((Math.max(...new_arr)+100)/1000)*1000 
}
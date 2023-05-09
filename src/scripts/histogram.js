import * as d3 from "d3";  

export function histoTest() {
    console.log("Test works")
} 

export function fetchHistoData(url) {
    if (localStorage.getItem(url)) {
        makeChart(JSON.parse(localStorage.getItem(url)))
    } else {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Something went wrong")
                }
            })  
            .then((data) => {
                localStorage.setItem(url, JSON.stringify(data))
                makeChart(data)
            })
            .catch((error) => {
                console.error("There was an error", error)
            })
    }
}

export function makeChart(data) {
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
        .domain(restructuredData.map(function(d) { return d.salary; }))
        .padding(0.1)
    
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
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
            .attr("height", function(d) { return height - y(d.numJobs); })
            .attr("fill", "#69b3a2")

    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width - 150)
        .attr("y", height + 60)
        .text("Salaries (USD)");

    svg.append("text")
        .attr("text-anchor", "end")
        .attr("y", -38)
        .attr("x", -90)
        .attr("transform", "rotate(-90)")
        .text("Number of Job Openings");
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


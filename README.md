# Software Job Market Analysis Tool

Technologies, frameworks, and languages are always changing in software development. I wanted to find out exactly what employers were looking for, so I decided to make a tool which organizes job listings by language. This is intended to inform programmers about which languages and technologies they might consider learning to improve their job prospects.

This tool will use aggregates of thousands of columns of job listing information to find average salary, job listings, and locations on a (coding) language basis. It will then visualize this data in a way which makes it easy to understand and interpret. 

# Functionality and MVPs

- Display languages based off popularity
- Display aggregate data about all available languages
- Select a language for more details
- Return from language page to home page

![image](https://github.com/treypisano/developer-job-market/assets/126501514/a9275712-59fe-49e0-a03a-412722e984de)

# Making the Language Page

- The language page will display specific data about each language
- It displays the distribution of salaries relative to the number of job openings
- This data is fetched from live job postings using the Adzuna API, by searching for "(language) developer"

# The Aggregate Language Page
- This page visually represents the combined data for each coding language, sorted by average salary
- As opposed to the individual language pages, this is useful for comparing the differences in languages at the same time

```
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
```
The above code shows how the data is fetched from the api and parsed. If it has already been fetched and saved in local storage, then a request is not made. Otherwise, a call to the API is made.


- Nav links to my GitHub, Linkedin
- A bar chart displaying the frequency of each language
- Clickable redirect to language page
- On language page, display specific information

# Technologies, Libraries, APIs

- D3 library for graphs/visuals
- Webpack and Babel to bundle source code
- npm to direct file structure

# Future Additions

- Language searching functionality/ adding more searchable languages
- Display job history data over time
- Display job openings per language
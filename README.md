# developer-job-market

Technologies, frameworks, and languages are always changing in software development. I wanted to find out exactly what employers were looking for, so I decided to make a tool which organizes job listings by language. This is intended to inform programmers about which languages and technologies they might consider learning to improve their job prospects.

This tool will use aggregates of thousands of columns of job listing information to find average salary, job listings, and locations on a (coding) language basis. It will then visualize this data in a way which makes it easy to understand and interpret. 

Functionality and MVPs

- Display languages based off popularity
- Select a language for more details
- Return from language page to home page
- A production readme

![1-Homepage](https://user-images.githubusercontent.com/126501514/236357116-68693ce4-a8e0-4313-a780-1b9df4e78bfa.png)
![2-Language-Page](https://user-images.githubusercontent.com/126501514/236357119-8ca3cd8c-a645-4c89-8c94-a583c42b05e8.png)

- Nav links to my GitHub, Linkedin
- A bar chart displaying the frequency of each language
- Clickable redirect to language page
- On language page, display specific information

Technologies, Libraries, APIs

- D3 library for graphs/visuals
- Webpack and Babel to bundle source code
- npm to direct file structure

Implementation Timeline

- Friday Afternoon/Weekend - Decide exactly how to parse API requests. Get a loose frame for the home page. Potentially create the classes for bar/lanugage.

- Monday - Spend more time finalizing the way the data is parsed from the APIs. Start simple animations on the loading of bars. Get started on the frame of the language page. 

- Tuesday - Polish the animations on the main page, and the frame on the first page. Start adding sort by functionality on the home page.

- Wednesday - Make sure the functionality is consistent. Polish up more aesthitic touches like coloring/borders, things that are not central to the functionality.

- Thursday - Put on the finishing touches and upload to Git.

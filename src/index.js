import * as d3 from "d3";
import * as Histogram from "./scripts/histogram"
import * as LanguagesBar from "./scripts/languagesbar"
import NavBar, { loadInfoBar} from "./scripts/navbar";
const homeUrl = "https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&what=Javascript%20developer"

makeNavLinksClickable()
Histogram.fetchAndSaveHistoData()

// if (localStorage.getItem(homeUrl)) {
//     loadInfoBar("Javascript")
// }    

LanguagesBar.makeBarGraph()

function makeNavLinksClickable(){
    const navLinks = document.querySelectorAll("p") 
    navLinks.forEach(link => {
        new NavBar(link)
    })
}


// console.log(LanguagesBar.restructureLanguageData())

// {
//     "https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&what=Python%20developer": "{\"histogram\":{\"20000\":42,\"40000\":667,\"60000\":48,\"80000\":20,\"100000\":17,\"120000\":53,\"140000\":34},\"__CLASS__\":\"Adzuna::API::Response::SalaryHistogram\"}",
//     "https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&what=C++%20developer": "{\"histogram\":{\"20000\":4,\"40000\":52,\"60000\":99,\"80000\":21,\"100000\":18,\"120000\":21,\"140000\":27},\"__CLASS__\":\"Adzuna::API::Response::SalaryHistogram\"}",
//     "https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&what=Java%20developer": "{\"histogram\":{\"20000\":14,\"40000\":82,\"60000\":47,\"80000\":28,\"100000\":57,\"120000\":53,\"140000\":51},\"__CLASS__\":\"Adzuna::API::Response::SalaryHistogram\"}",
//     "https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&what=Ruby%20developer": "{\"__CLASS__\":\"Adzuna::API::Response::SalaryHistogram\",\"histogram\":{\"20000\":0,\"40000\":4,\"60000\":2,\"80000\":2,\"100000\":2,\"120000\":1,\"140000\":8}}",
//     "https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&what=Javascript%20developer": "{\"__CLASS__\":\"Adzuna::API::Response::SalaryHistogram\",\"histogram\":{\"20000\":32,\"40000\":27,\"60000\":19,\"80000\":27,\"100000\":25,\"120000\":12,\"140000\":41}}",
//     "https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&what=Swift%20developer": "{\"histogram\":{\"20000\":0,\"40000\":118,\"60000\":4,\"80000\":3,\"100000\":2,\"120000\":3,\"140000\":7},\"__CLASS__\":\"Adzuna::API::Response::SalaryHistogram\"}",
//     "https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&what=PHP%20developer": "{\"histogram\":{\"20000\":2,\"40000\":4,\"60000\":5,\"80000\":2,\"100000\":11,\"120000\":4,\"140000\":10},\"__CLASS__\":\"Adzuna::API::Response::SalaryHistogram\"}"
// }
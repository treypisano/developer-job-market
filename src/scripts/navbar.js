export default class NavBar {

    constructor (navLink) {
        this.navLink = navLink
        navLink.addEventListener("click", this.clicked)
    }

    clicked(event) {
        console.log(event.target.innerText)
        // console.log(navLink)
    }
}

export default class NavBar {

    constructor (navLink) {
        this.navLink = navLink
        navLink.addEventListener("click", this.clicked)
    }

    clicked() {
        console.log("ouch, ive been clicked!")
    }
}
const navLinks = {
    dnaBtn: document.getElementById("dnaLink"),
    approachBtn: document.getElementById("approachLink"),
    teamBtn: document.getElementById("teamLink"),
    companiesBtn: document.getElementById("companiesLink"),
    square1: document.querySelector(".square1"),
    square2: document.querySelector(".square2"),
    square3: document.querySelector(".square3"),
}

for (const key in navLinks) {
    console.log(key)
    navLinks[key].addEventListener("mouseover", e => {
        return colourChange(e), console.log("yeet")
    })
    navLinks[key].addEventListener("mouseleave", e => {
        return colourOut(e)
    })
    if (key !== "square1" || key !== "square2" || key !== "square3") {
        navLinks[key].addEventListener("mouseover", e => {
            return squareSizeChange(e)
        })
        navLinks[key].addEventListener("mouseleave", e => {
            return squareSizeReset(e)
        })
    }
}

const colourChange = e => {
    const target = document.getElementById(e.target.id)
    const linkArr = [
        navLinks.dnaBtn,
        navLinks.approachBtn,
        navLinks.teamBtn,
        navLinks.companiesBtn,
    ]

    linkArr.forEach(link => {
        if (link === target) {
            return (link.style.color = "white")
        }
        link.style.color = "grey"
    })
}

const colourOut = e => {
    const linkArr = [
        navLinks.dnaBtn,
        navLinks.approachBtn,
        navLinks.teamBtn,
        navLinks.companiesBtn,
    ]
    linkArr.forEach(link => {
        link.style.color = "white"
    })
}

const squareSizeChange = e => {
    console.log("hse")
    navLinks.square1.style.width = "30rem"
    navLinks.square1.style.height = "30rem"
    navLinks.square1.style.gap = "8rem"
    navLinks.square1.style.marginRight = "0.1rem"

    navLinks.square2.style.width = "30rem"
    navLinks.square2.style.height = "30rem"
    navLinks.square2.style.gap = "8rem"
    navLinks.square2.style.marginRight = "0.1rem"

    navLinks.square3.style.width = "30rem"
    navLinks.square3.style.height = "30rem"
    navLinks.square3.style.gap = "8rem"
    navLinks.square3.style.marginRight = "0.1rem"

    const squareOne = navLinks.square1
    const squareTwo = navLinks.square2
    const squareThree = navLinks.square3

    // const line = document.querySelectorAll(".line1")
    // line.style.color = "rgb(32, 31, 38)"

    const target = document.getElementById(e.target.id)
    if (navLinks.dnaBtn === target) {
        return (
            (squareOne.style.marginTop = "-20rem"),
            (squareTwo.style.marginTop = "76rem"),
            (squareThree.style.marginTop = "26rem")
        )
    }
    if (navLinks.approachBtn === target) {
        return (
            (squareOne.style.marginTop = "-11rem"),
            (squareTwo.style.marginTop = "85rem"),
            (squareThree.style.marginTop = "35rem")
        )
    }
    if (navLinks.teamBtn === target) {
        return (
            (squareOne.style.marginTop = "-1rem"),
            (squareTwo.style.marginTop = "95rem"),
            (squareThree.style.marginTop = "45rem")
        )
    }
    if (navLinks.companiesBtn === target) {
        return (
            (squareOne.style.marginTop = "8rem"),
            (squareTwo.style.marginTop = "103rem"),
            (squareThree.style.marginTop = "54rem")
        )
    }
}

const squareSizeReset = e => {
    navLinks.square1.style.width = ""
    navLinks.square1.style.height = ""
    navLinks.square1.style.gap = ""
    navLinks.square1.style.marginLeft = ""
    navLinks.square1.style.marginTop = ""

    navLinks.square2.style.width = ""
    navLinks.square2.style.height = ""
    navLinks.square2.style.gap = ""
    navLinks.square2.style.marginLeft = ""
    navLinks.square2.style.marginTop = ""

    navLinks.square3.style.width = ""
    navLinks.square3.style.height = ""
    navLinks.square3.style.gap = ""
    navLinks.square3.style.marginLeft = ""
    navLinks.square3.style.marginTop = ""
}

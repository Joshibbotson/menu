const navLinks = {
    dnaBtn: document.getElementById("dnaLink"),
    approachBtn: document.getElementById("approachLink"),
    teamBtn: document.getElementById("teamLink"),
    companiesBtn: document.getElementById("companiesLink"),
    square: document.querySelector(".square"),
}

for (const key in navLinks) {
    console.log(key)
    navLinks[key].addEventListener("mouseover", e => {
        return colourChange(e)
    })
    navLinks[key].addEventListener("mouseleave", e => {
        return colourOut(e)
    })
    if (key !== "square") {
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
    navLinks.square.style.width = "30rem"
    navLinks.square.style.height = "30rem"
    navLinks.square.style.gap = "8rem"
    navLinks.square.style.marginRight = "0.1rem"

    const square = navLinks.square
    // const line = document.querySelectorAll(".line1")
    // line.style.color = "rgb(32, 31, 38)"

    const target = document.getElementById(e.target.id)
    if (navLinks.dnaBtn === target) {
        return (square.style.marginTop = "-13rem")
    }
    if (navLinks.approachBtn === target) {
        return (square.style.marginTop = "-5rem")
    }
    if (navLinks.teamBtn === target) {
        return (square.style.marginTop = "5rem")
    }
    if (navLinks.companiesBtn === target) {
        return (square.style.marginTop = "13rem")
    }
}

const squareSizeReset = e => {
    navLinks.square.style.width = ""
    navLinks.square.style.height = ""
    navLinks.square.style.gap = ""
    navLinks.square.style.marginLeft = ""
    navLinks.square.style.marginTop = ""
}

let form = document.querySelector("#weatherform")
let forminput = document.querySelector("#weatherinput")
let htmltext = document.querySelector(".text")
form.addEventListener("submit", (event) => {
    let a = (forminput.value)

    if (a >= 50) {

        // show.innerHTML = (value)
        document.write("heath view")
    }
    else if (a >= 40) {
        document.write("Garmi ha")
    }
    else if (a >= 30) {
        document.write("Kam garmi ha")
    }
    else if (a >= 20) {
        document.write("Normal")
    }
    else if (a >= 0) {
        document.write("Sardi ha")
    }
    else {
        document.write("Barafbariha")
    }

})

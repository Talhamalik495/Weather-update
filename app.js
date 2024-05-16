let form = document.getElementById("weatherform")
let forminput = document.getElementById("weatherinput")
let text = document.getElementById("show")
form.addEventListener("submit", (event) => {
    // preventDefault("")
    let a = (forminput.value)

    // show.innerHTML = (a)
    if (a >= 50) {
        v = "heat view";
        text.innerHTML = v;
    }
    else if (a >= 40) {
        // document.write("Garmi ha")
        test = ("Garmi ha")
        text.innerHTML = test;
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

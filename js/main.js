console.log("the js has loaded")


const form = document.getElementById("qr-code-form")
const data = document.getElementById("qr-code-data")
const size = document.getElementById("dropdown")


form.addEventListener("submit", (event) => {
    event.preventDefault()
    if(!data.value || size.value) {
        alert("please fill out the form")
    }
    console.log(size.value)


    console.log("form sumbitted")
})
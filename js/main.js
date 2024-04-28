const slider = document.getElementById("myRange");
const form = document.getElementById("qr-code-form")
const data = document.getElementById("qr-code-data")
const size = document.getElementById("dropdown")


form.addEventListener("submit", (event) => {
    event.preventDefault()
    if(!data.value || size.value === "null") {
        alert("please finish filling out the form")
    }
})

slider.oninput = function() {
    
    console.log(this.value)
  }


const slider = document.getElementById("myRange");
const form = document.getElementById("qr-code-form")
const data = document.getElementById("qr-code-data")
const toggle = document.getElementById("toggle");
const emptyBtn = document.getElementById("empty-form-btn")


// toggle.style.display = "block"


form.addEventListener("submit", (event) => {
    event.preventDefault()
    if(!data.value) {
        toggle.style.display = "block"
        return 
    }
    console.log(slider.value)

})


// this sets the value of the slider  
slider.oninput = function() {
    
  }



emptyBtn.addEventListener("click", () => {
    toggle.style.display = "none"
})
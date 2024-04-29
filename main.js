const slider = document.getElementById("myRange");
const form = document.getElementById("qr-code-form")
const data = document.getElementById("qr-code-data")
const toggle = document.getElementById("toggle");
const emptyBtn = document.getElementById("empty-form-btn")
const imgUrl = document.getElementById("qr-code-img")


// toggle.style.display = "block"


form.addEventListener("submit", (event) => {
    event.preventDefault()
    if(!data.value) {
        toggle.style.display = "block"
        return 
    }
    console.log(slider.value)
    getQRCode()



})


emptyBtn.addEventListener("click", () => {
    toggle.style.display = "none"
})



const getQRCode = () => {
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data.value}`)
    .then(res => {
        if(!res.ok) {
            console.error("unable to the the qr code")
        }
        return res.blob()
    })
    .then(blob => {
        imgUrl.src = ""
        const objUrl = URL.createObjectURL(blob);
        imgUrl.src = objUrl

    })
} 
// Contact buttons
const number = '+94702338773'
function call() {
    window.open(`tel:${number}`)
}
function message() {
    window.open(`sms:${number}`)
}
function whatsapp() {
    window.open(`https://wa.me/${number}`)
}
function email() {
    window.open('mailto:ramee.nana@gmail.com')  
}

// Experience years
let yearsSpan = document.getElementById('years')
const years = new Date().getFullYear() - 2002
yearsSpan.textContent = years

// Copyright year
// let copyrightYearSpan = document.getElementById('copyright-year').textContent = new Date().getFullYear()
document.getElementById('copyright-year').textContent = new Date().getFullYear()
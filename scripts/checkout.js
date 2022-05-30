document.querySelector("form").addEventListener("submit", checkout)

function checkout() {
    event.preventDefault()
    console.log("aniket")

    setTimeout(function () {
        alert("Your order is accepted")
    }, 0)

    setTimeout(function () {
        alert("Your order is being Prepared ")
    }, 3000)

    setTimeout(function () {
        alert("Your order is being packed")
    }, 8000)

    setTimeout(function () {
        alert("Your order is out for delivery")
    }, 10000)

    setTimeout(function () {
        alert("Order delivered")
    }, 12000)
}
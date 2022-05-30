// Add the coffee to local storage with key "coffee"

const url = "https://masai-mock-api.herokuapp.com/coffee/menu";
// console.log(url);

const container = document.getElementById("menu")


fetch(url)
    .then(function(res) {
        return res.json();
    })

    .then(function(res) {
        coffeeData(res.menu.data)
        // console.log(res);
    })

    .catch(function(err) {
        console.log(err);
    })

    var coffeeArr = JSON.parse(localStorage.getItem("coffee")) || [];

    let length = coffeeArr.length
    document.getElementById("coffee_count").innerText = length



    function coffeeData(data){
        // console.log(data)
        data.forEach(function (ele) {

            let div = document.createElement('div')

            let image = document.createElement("img")
            image.src = ele.image
            image.setAttribute("class","img");

            let type = document.createElement("p")
            type.innerText = ele.title

            let price = document.createElement("p")
            price.innerText = ele.price

            let btn = document.createElement("button")
            btn.innerText = "Add to Bucket"
            btn.addEventListener("click",function() {
                addbtn(ele)
            })

            div.append(image,type,price,btn)
            container.append(div);
        })
    }

    function addbtn(ele){
        console.log(addbtn);
        coffeeArr.push(ele)
        localStorage.setItem("coffee",JSON.stringify(coffeeArr))
        window.location.reload();

    }

    
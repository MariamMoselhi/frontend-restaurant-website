let iconcard = document.querySelector(".iconcard");
let cart = document.querySelector(".cart");
let container = document.querySelector(".container");
let close = document.querySelector(".close");

iconcard.addEventListener("click", ()=>{
    if(cart.style.right == "-100%"){
        cart.style.right = "0";
        container.style.transform = "translateX(-400px)";
    }else{
        cart.style.right = "-100%";
        container.style.transform = "translateX(0)";
    }
})
close.addEventListener("click",()=>{
    cart.style.right = "-100%";
    container.style.transform = "translateX(0)";

})
let products = null
//get data from json file
fetch('product.json')
.then(response => response.json)
.then(data => {
    products = data;
    addDataToHTML();
})
//show data in list html
function addDataToHTML(){
    //remove datas dafault in html
    let listproductHTML = document.querySelector('.listproduct') ;
    listproductHTML.innerHTML = '';
    
    //add new datas
    if(products!= null){
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<img src="img/shopping-bag-svgrepo-com.svg">
            <h2>product name</h2>
            <div class="price">50&</div>
            <button>add to Cart</button>`
            listproductHTML.appendChild(newProduct);
        });
    }
}
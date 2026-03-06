const whatsappNumber = "919359124428";

/* =========================
   CART
========================= */

let cart = [];

/* =========================
   PRODUCTS
========================= */

const products = [

{ id:"1", name:"Black Knit Running Shoes", price:1200, deposit:2000, category:"Footwear", size:"9", image:"./images/black-knit-running-shoes.jpg" },
{ id:"2", name:"Philips Turbo Dry Hair Dryer", price:500, deposit:1000, category:"Accessories", size:"Standard", image:"./images/philips-turbo-dry-hair-dryer.jpg" },
{ id:"3", name:"Beige Chunky Sneakers", price:1500, deposit:2500, category:"Footwear", size:"6", image:"./images/beige-chunky-sneakers.jpg" },
{ id:"4", name:"Philips Dry Iron", price:400, deposit:800, category:"Accessories", size:"Standard", image:"./images/philips-dry-iron.jpg" },
{ id:"5", name:"Navy Blue Gradient Running Shoes", price:1300, deposit:2200, category:"Footwear", size:"10", image:"./images/navy-blue-gradient-running-shoes.jpg" },

{ id:"6", name:"Tropical Floral Half Sleeve Shirt", price:900, deposit:1500, category:"Clothing", size:"L", image:"./images/tropical-floral-half-sleeve-shirt.jpg" },
{ id:"7", name:"Navy Tropical Floral Shirt", price:950, deposit:1600, category:"Clothing", size:"L", image:"./images/navy-tropical-floral-shirt.jpg" },
{ id:"8", name:"Abstract Leaf Print Half Sleeve Shirt", price:850, deposit:1400, category:"Clothing", size:"M", image:"./images/abstract-leaf-print-half-sleeve-shirt.jpg" },
{ id:"9", name:"Black Curly Wig with Bowler Hat", price:400, deposit:700, category:"Accessories", size:"Standard", image:"./images/black-curly-wig-bowler-hat.jpg" },

{ id:"10", name:"Silver Embroidered Sherwani", price:1200, deposit:1200, category:"Clothing", size:"L", image:"./images/silver-embroidered-sherwani.jpeg" },
{ id:"11", name:"Black Beaded Statement Necklace", price:200, deposit:200, category:"Accessories", size:"Free Size", image:"./images/black-beaded-statement-necklace.jpeg" },
{ id:"12", name:"White Champion Hoodie", price:500, deposit:500, category:"Clothing", size:"M", image:"./images/white-champion-hoodie.jpeg" },
{ id:"13", name:"Peach Silk Saree with Blouse", price:500, deposit:500, category:"Clothing", size:"Free Size", image:"./images/peach-silk-saree-with-blouse.jpeg" },
{ id:"14", name:"Grey Formal Suit Set", price:700, deposit:700, category:"Clothing", size:"L", image:"./images/grey-formal-suit-set.jpeg" },
{ id:"15", name:"Gold and Ruby Bridal Necklace Set", price:400, deposit:400, category:"Accessories", size:"Free Size", image:"./images/gold-and-ruby-bridal-necklace-set.jpeg" },
{ id:"16", name:"Navy Blue Formal Suit", price:700, deposit:700, category:"Clothing", size:"M", image:"./images/navy-blue-formal-suit.jpeg" },
{ id:"17", name:"Maroon Evening Gown", price:800, deposit:800, category:"Clothing", size:"S", image:"./images/maroon-evening-gown.jpeg" },
{ id:"18", name:"White Sequin Mini Dress", price:700, deposit:700, category:"Clothing", size:"S", image:"./images/white-sequin-mini-dress.jpeg" },
{ id:"19", name:"Navy Blue Strapless Party Dress", price:400, deposit:400, category:"Clothing", size:"M", image:"./images/navy-blue-strapless-party-dress.jpeg" },

{ id:"20", name:"Polka Dot Puff Crop Top", price:500, deposit:500, category:"Clothing", size:"S", image:"./images/Polka dot puff crop top.jpg" },
{ id:"21", name:"Monochrome Houndstooth Cut-Out Dress", price:1000, deposit:1000, category:"Clothing", size:"S", image:"./images/Monochrome Houndstooth Cut-Out Dress.jpg" },
{ id:"22", name:"Mint Blossom Embroidered Cape Lehenga Set", price:2000, deposit:2000, category:"Clothing", size:"S", image:"./images/Mint Blossom Embroidered Cape Lehenga Set.jpg" },
{ id:"23", name:"Sage Green Floral Dress", price:1000, deposit:1000, category:"Clothing", size:"M", image:"./images/Sage-green-floral-dress.jpg" },
{ id:"24", name:"Navy Blue & Golden Lehenga", price:3000, deposit:3000, category:"Clothing", size:"L", image:"./images/Navy-Blue-&-Golden-Lehenga.jpg" },

{ id:"25", name:"Denim Mini Dress", price:1000, deposit:1000, category:"Clothing", size:"S", image:"./images/Denim-Mini-Dress.jpg" },
{ id:"26", name:"Off-white and Gold Anarkali Dress", price:1000, deposit:1000, category:"Clothing", size:"S", image:"./images/Off-white-and-gold-Anarkali-Dress.jpg" },
{ id:"27", name:"Red Embroidered Lehenga", price:3000, deposit:3000, category:"Clothing", size:"S", image:"./images/Red-embroidered-Lehenga.jpg" },
{ id:"28", name:"Elegant Beige Embroidered Lehenga", price:4000, deposit:4000, category:"Clothing", size:"S", image:"./images/Elegant-beige-embroidered-lehenga.jpg" },
{ id:"29", name:"Navy Blue & Gold Anarkali Dress", price:2000, deposit:2000, category:"Clothing", size:"S", image:"./images/Navy-Blue-&-Gold-Anarkali-Dress.jpg" },

{ id:"30", name:"Off-white Embroidered Long Skirt", price:1000, deposit:1000, category:"Clothing", size:"S", image:"./images/Off-white-embroidered-long-skirt.jpg" },
{ id:"31", name:"Elegant Blue Topaz Earrings", price:1000, deposit:1000, category:"Accessories", size:"Standard", image:"./images/Elegant-Blue-Topaz-earrings.jpg" },
{ id:"32", name:"Black & Gold Embroidered Skirt", price:2000, deposit:2000, category:"Clothing", size:"M", image:"./images/Black-&-Gold-Embroidered-Skirt.jpg" },
{ id:"33", name:"Elegant White and Gold Choli Blouse", price:2000, deposit:2000, category:"Clothing", size:"M", image:"./images/Elegant-white-and-gold-choli-blouse.jpg" },

{ id:"34", name:"Ferrari Pilota Black Watch", price:1399, deposit:1399, category:"Accessories", size:"Standard", image:"./images/Ferrari-Pilota-Black-Watch.jpg" },
{ id:"35", name:"Reebok Black Shoe", price:699, deposit:699, category:"Footwear", size:"7", image:"./images/Reebok-Black-Shoe.jpg" },
{ id:"36", name:"Titan White Analog Watch", price:499, deposit:499, category:"Accessories", size:"Standard", image:"./images/Titan-White-Watch.jpg" },
{ id:"37", name:"Timex Analog Watch", price:799, deposit:799, category:"Accessories", size:"Standard", image:"./images/Timex-Analog-Watch.jpg" },
{ id:"38", name:"Titan Black Analog Watch", price:499, deposit:499, category:"Accessories", size:"Standard", image:"./images/Titan-Black-Watch.jpg" },
{ id:"39", name:"Fossil Black Watch", price:799, deposit:799, category:"Accessories", size:"Standard", image:"./images/Fossil-Black-Watch.jpg" },
{ id:"40", name:"Bentley Watch", price:899, deposit:899, category:"Accessories", size:"Standard", image:"./images/Bentley-Watch.jpg" },
{ id:"41", name:"Fossil Golden Watch", price:799, deposit:799, category:"Accessories", size:"Standard", image:"./images/Fossil-Golden-Watch.jpg" },

{ id:"42", name:"Puma Palermo", price:899, deposit:899, category:"Footwear", size:"7", image:"./images/Puma-Palermo.jpg" },
{ id:"43", name:"New Balance RC42", price:899, deposit:899, category:"Footwear", size:"7", image:"./images/New-Balance-RC42.jpg" },

{ id:"44", name:"Black Kenneth Cole Watch", price:1500, deposit:1500, category:"Accessories", size:"Free Size", image:"./images/Black-Kenneth-Cole-Watch.jpeg" },
{ id:"45", name:"Blue Lehenga", price:1500, deposit:1500, category:"Clothing", size:"M", image:"./images/Blue-Lehenga.png" },
{ id:"46", name:"Blue Peter England Blazer", price:750, deposit:750, category:"Clothing", size:"M", image:"./images/Blue-Peter-England-Blazer.jpeg" },
{ id:"47", name:"Purple Embroidered Kurta", price:500, deposit:500, category:"Clothing", size:"M", image:"./images/Purple-Embroidered-Kurta.png" },
{ id:"48", name:"White and Red Lehenga", price:1100, deposit:1100, category:"Clothing", size:"M", image:"./images/White-and-Red-Lehenga.png" },
{ id:"49", name:"Red Kurta", price:500, deposit:500, category:"Clothing", size:"S", image:"./images/Red-Kurta.png" },
{ id:"50", name:"Gold and Green Lehenga", price:1100, deposit:1100, category:"Clothing", size:"M", image:"./images/Gold-and-Green-Lehenga.jpeg" },
{ id:"51", name:"Green Party Dress", price:800, deposit:800, category:"Clothing", size:"S", image:"./images/Green-Party-Dress.jpeg" },
{ id:"52", name:"Orange Embroidered Party Dress", price:800, deposit:800, category:"Clothing", size:"S", image:"./images/Orange-Embroidered-Party-Dress.jpeg" }

];

/* =========================
   DISPLAY PRODUCTS
========================= */

function displayProducts(list){

const grid = document.getElementById("productGrid");

if(!grid) return;

grid.innerHTML="";

list.forEach(product=>{

grid.innerHTML += `

<div class="product-card" onclick="openProduct('${product.id}')">

<img src="${product.image}">

<h4>${product.name}</h4>

<p>₹${product.price} / day</p>

<p>Deposit ₹${product.deposit}</p>

<p>Size ${product.size}</p>

<button onclick="event.stopPropagation(); addToCart('${product.id}')">
Add to Cart
</button>

</div>

`;

});

}

/* =========================
   ADD TO CART
========================= */

function addToCart(id){

const product = products.find(p => p.id === id);

cart.push(product);

alert(product.name + " added to cart");

}

/* =========================
   PRODUCT PAGE
========================= */

function openProduct(id){

localStorage.setItem("selectedProduct", id);

window.location.href = "product.html";

}

function loadProduct(){

const id = localStorage.getItem("selectedProduct");

if(!id) return;

const product = products.find(p => p.id === id);

if(!product) return;

document.getElementById("productImage").src = product.image;
document.getElementById("productName").innerText = product.name;
document.getElementById("productPrice").innerText = "₹"+product.price+"/day";
document.getElementById("productDeposit").innerText = "Deposit ₹"+product.deposit;
document.getElementById("productSize").innerText = "Size "+product.size;

}

/* =========================
   WHATSAPP
========================= */

function openWhatsApp(){

window.open(`https://wa.me/${whatsappNumber}`, "_blank");

}

function confirmRental(){

const product = document.getElementById("productName").innerText;

const start = document.getElementById("startDate").value;
const end = document.getElementById("endDate").value;

const message = `Hi ClosetYield, I want to rent ${product} from ${start} to ${end}`;

window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);

}

/* =========================
   FILTERS
========================= */

function applyFilters(){

const search = document.getElementById("search")?.value.toLowerCase() || "";
const category = document.getElementById("categoryFilter")?.value || "all";
const size = document.getElementById("sizeFilter")?.value || "all";

let filtered = products;

if(search){
filtered = filtered.filter(p => p.name.toLowerCase().includes(search));
}

if(category !== "all"){
filtered = filtered.filter(p => p.category === category);
}

if(size !== "all"){
filtered = filtered.filter(p => p.size === size);
}

displayProducts(filtered);

}

/* =========================
   INITIAL LOAD
========================= */

document.addEventListener("DOMContentLoaded", function(){

displayProducts(products);
loadProduct();

});
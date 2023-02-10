let btn = document.getElementsByClassName("ticket__buy-btn");
let price = document.getElementById("ticket__current-price");
let store = document.getElementById("store");
let count = document.getElementById("pcount");
let cartbtn = document.getElementById("cartbtn");
let movies = [
  {
    id: 1,
    imglink: "https://i.ibb.co/ThPNnzM/blade-runner.jpg",
    title: "Blade Runner 2049",
    slogan: "More human than human is our motto.",
    cprice: "$28.00",
    oprice: "$44.99",
    count: 1
  },
  {
    id: 2,
    imglink: "https://i.ibb.co/Zd51z5c/justice-league.jpg",
    title: "Justice League",
    slogan: "You can't save the world alone.",
    cprice: "$20.75",
    oprice: "$40.99",
    count: 1
  },
  {
    id: 3,
    imglink: "https://i.ibb.co/ThPNnzM/blade-runner.jpg",
    title: "Blade Runner 2049",
    slogan: "More human than human is our motto.",
    cprice: "$28.00",
    oprice: "$44.99",
    count: 1
  },
  {
    id: 4,
    imglink: "https://i.ibb.co/Zd51z5c/justice-league.jpg",
    title: "Justice League",
    slogan: "You can't save the world alone.",
    cprice: "$20.75",
    oprice: "$40.99",
    count: 1
  },
  {
    id: 5,
    imglink: "https://i.ibb.co/ThPNnzM/blade-runner.jpg",
    title: "Blade Runner 2049",
    slogan: "More human than human is our motto.",
    cprice: "$28.00",
    oprice: "$44.99",
    count: 1
  },
  {
    id: 6,
    imglink: "https://i.ibb.co/Zd51z5c/justice-league.jpg",
    title: "Justice League",
    slogan: "You can't save the world alone.",
    cprice: "$20.75",
    oprice: "$40.99",
    count: 1
  },
  {
    id: 7,
    imglink: "https://i.ibb.co/ThPNnzM/blade-runner.jpg",
    title: "Blade Runner 2049",
    slogan: "More human than human is our motto.",
    cprice: "$28.00",
    oprice: "$44.99",
    count: 1
  },
  {
    id: 8,
    imglink: "https://i.ibb.co/Zd51z5c/justice-league.jpg",
    title: "Justice League",
    slogan: "You can't save the world alone.",
    cprice: "$20.75",
    oprice: "$40.99",
    count: 1
  },
  {
    id: 9,
    imglink: "https://i.ibb.co/ThPNnzM/blade-runner.jpg",
    title: "Blade Runner 2049",
    slogan: "More human than human is our motto.",
    cprice: "$28.00",
    oprice: "$44.99",
    count: 1
  },
  {
    id: 10,
    imglink: "https://i.ibb.co/Zd51z5c/justice-league.jpg",
    title: "Justice League",
    slogan: "You can't save the world alone.",
    cprice: "$20.75",
    oprice: "$40.99",
    count: 1
  },
];


nav.addEventListener("click", () => {
  store.style.display === "none"
    ? (store.style.display = "flex")
    : (store.style.display = "none");
});

if(JSON.parse(localStorage.getItem('cart'))===null){
  localStorage.setItem('cart',JSON.stringify([]))
}

let main = document.getElementsByClassName("hero-container")[0];

function products() {
  movies.forEach((e) => {
    main.innerHTML += `
        <div class="main-container">
			<div class="poster-container">
				<a href="#"><img src="${e.imglink}" class="poster" /></a>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">${e.title}</h4>
					<p class="ticket__movie-slogan">
                    ${e.slogan}
					</p>
					<p class="ticket__current-price">${e.cprice}</p>
					<p class="ticket__old-price">${e.oprice}</p>
					<button onclick='addProducts(${e.id})' class="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div>
        `;
  });
}


function addProducts(item){
  let currentProd = movies.find(e=> e.id === item)
    let cartArr = JSON.parse(localStorage.getItem('cart'))
    let x = cartArr.find(e=> e.id === item)

    if(x === undefined){
        localStorage.setItem('cart', JSON.stringify([...cartArr, currentProd]))
    }
    else {
        let newArr = cartArr.map(e => {
            if (e.id === item) {
                return { ...e, count: e.count + 1 }
            }
            return e
        })
        localStorage.setItem('cart', JSON.stringify(newArr))
    }
    addCount()
    cartAdd()
    
}

console.log(JSON.parse(localStorage.getItem('cart')))
function cartAdd() {
  let cartArr = JSON.parse(localStorage.getItem('cart'))
  cartArr.forEach(e=>{
    store.innerHTML += "Salam"
  })

}

function addCount(){
  let imran = JSON.parse(localStorage.getItem('cart'))
  count.innerText = imran.lenght
}




products();

// function generateMovieHTML(movie) {
  //   return `
//         <div class="main-container">
// 			<div class="poster-container">
// 				<a href="#"><img src="${movie.imglink}" class="poster" /></a>
// 			</div>
// 			<div class="ticket-container">
// 				<div class="ticket__content">
// 					<h4 class="ticket__movie-title">${movie.title}</h4>
// 					<p class="ticket__movie-slogan">
//                     ${movie.slogan}
// 					</p>
// 					<p class="ticket__current-price">${movie.cprice}</p>
// 					<p class="ticket__old-price">${movie.oprice}</p>
// 					<button class="ticket__buy-btn">Buy now</button>
// 				</div>
// 			</div>
// 		</div>
//         `;
// }

// function AddProducts() {
//   let mainHTML = "";
//   movies.forEach((e) => {
//     mainHTML += generateMovieHTML(e);
//   });
//   main.innerHTML = mainHTML;
// }

// AddProducts();

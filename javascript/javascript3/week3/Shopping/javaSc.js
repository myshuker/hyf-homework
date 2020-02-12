//Shopping cart using Classes

const producstOutput = document.getElementById("products-cart");
const user = document.getElementById("user");
const btn = document.getElementById("btn");
btn.innerText = 'Serach';

const search = document.getElementById("search");
const mysearch = search.value 
//console.log(mysearch);


class Product {
    constructor(name, price) {
    this.name = name;
    this.price = price;
}

  convertToCurrency(currency){
    const API_KEY = "1b75c59fd7e2c1cd1309752eec29a68f";
    const URL = `http://data.fixer.io/api/latest?access_key=${API_KEY}`
    fetch(URL)
    .then(re => re.json())
    .then(data => {
        console.log(data);
// what I should do more I don't understand what I should do after that...
    })
    }
}
class ShoppingCart {
  constructor(products) {
      this.products = products;
  }

  addProduct(product) {
      this.products.push(product);
    }

    removeProduct(product) {
        const newArray = this.products.filter(item => {
            return item.name !== product.name;
        });
    this.product = newArray;
}

searchProduct(productName) {
    return this.products.filter(product => {
      return product.name.toLowerCase().includes(productName.toLowerCase());
    });
}

getTotal() {
    let total = this.products.map(product => product.price);
    let sum = 0;
    for (let i = 0; i < total.length; i++) {
        sum += total[i];
    }
    document.getElementById("total").innerHTML = `The total price is : ${sum}`;
  }
  
  renderProducts() {
      for (let i = 0; i < this.products.length; i++) {
      const productLI = document.createElement("li");
      productLI.innerHTML = `(${this.products[i].name}) The price is : ${this.products[i].price} kr `;
      producstOutput.appendChild(productLI);
    }
  }

  getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
      .then(data => {
        console.log(data.name);
        user.innerText = `Mr: ${data.name}`;
    });
}

}

const flatscreen = new Product("flat-screen", 3499);
const PlayStation = new Product("PlayStation", 2399);
const Xbox = new Product("Xbox", 1899);
const MacBook = new Product("MacBook", 4500);
const vaskemaskine = new Product("vaskemaskine", 1700);

const shoppingCart = new ShoppingCart([flatscreen,PlayStation,Xbox,MacBook,vaskemaskine]);

console.log(shoppingCart);
shoppingCart.removeProduct(MacBook);
console.log(shoppingCart.searchProduct('vaskemaskine'));
shoppingCart.getTotal();
shoppingCart.renderProducts();
shoppingCart.getUser();


const plant = new Product('plant', 50);
console.log(plant.convertToCurrency('dollars'))


btn.addEventListener('click', shoppingCart.searchProduct(mysearch))
class Product {
  constructor(name, price, buttonText, imageUrl, category) {
    this.name = name;
    this.price = price;
    this.buttonText = buttonText;
    this.imageUrl = imageUrl;
    this.category = category;
  }
}


// Array de objetos representando os produtos
const productsData = [
  { name: "Jujutsu kaisen cap 1", price: 10, buttonText: "Add to Cart", imageUrl: "/img/61x+0Y93UhL._AC_UF350,350_QL80_.jpg", category: "Livros" },
  { name: "Product 2", price: 15, buttonText: "Add to Cart", imageUrl: "shopping.webp", category: "Presentes" },
  { name: "Product 3", price: 20, buttonText: "Add to Cart", imageUrl: "product3.jpg", category: "Vestimentas"},
  { name: "Product 4", price: 15, buttonText: "Add to Cart", imageUrl: "product2.jpg", category: "Cozinha" },
  { name: "Product 5", price: 20, buttonText: "Add to Cart", imageUrl: "product3.jpg", category: "Decoração" },
  { name: "Product 6", price: 10, buttonText: "Add to Cart", imageUrl: "product1.jpg", category: "Acessórios" },
  { name: "Product 7", price: 15, buttonText: "Add to Cart", imageUrl: "product2.jpg", category: "Colecionaveis" },
  { name: "Product 8", price: 20, buttonText: "Add to Cart", imageUrl: "product3.jpg", category: "Preço Baixo" },
  { name: "Product 9", price: 15, buttonText: "Add to Cart", imageUrl: "product2.jpg" },
  { name: "Product 10", price: 20, buttonText: "Add to Cart", imageUrl: "product3.jpg" },
  { name: "Product 11", price: 15, buttonText: "Add to Cart", imageUrl: "product2.jpg" },
  { name: "Product 12", price: 20, buttonText: "Add to Cart", imageUrl: "product3.jpg" },
  
  // Adicione quantos produtos desejar
];

const products = productsData.map(product => new Product(product.name, product.price, product.buttonText, product.imageUrl, product.category));

function showAllProducts() {
  const productCase = document.getElementById('productCase');
  productCase.innerHTML = '';

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>Price: $${product.price}</p>
      <button>${product.buttonText}</button>
    `;
    productDiv.addEventListener('click', function() {
      this.classList.toggle('selected');
    });
    productCase.appendChild(productDiv);
  });
}

function showProductsByCategory(category) {
  const productCase = document.getElementById('productCase');
  productCase.innerHTML = '';

  const filteredProducts = products.filter(product => product.category === category);
  filteredProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>Price: $${product.price}</p>
      <button>${product.buttonText}</button>
    `;
    productDiv.addEventListener('click', function() {
      this.classList.toggle('selected');
    });
    productCase.appendChild(productDiv);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const mostrarTodosButton = document.getElementById('mostrarTodosButton');
  mostrarTodosButton.addEventListener('click', function() {
    showAllProducts();
  });

  const livrosLink = document.getElementById('livrosLink');
  livrosLink.addEventListener('click', function(event) {
    event.preventDefault();
    showProductsByCategory('Livros');
  });

  const presentesLink = document.getElementById('presentesLink');
  presentesLink.addEventListener('click', function(event) {
    event.preventDefault();
    showProductsByCategory('Presentes');
  });

  const vestimentasLink = document.getElementById('vestimentasLink');
  vestimentasLink.addEventListener('click', function(event) {
    event.preventDefault();
    showProductsByCategory('Vestimentas');
  });

  const cozinhaLink = document.getElementById('cozinhaLink');
  cozinhaLink.addEventListener('click', function(event) {
    event.preventDefault();
    showProductsByCategory('Cozinha');
  });

  const decoracaoLink = document.getElementById('decoracaoLink');
  decoracaoLink.addEventListener('click', function(event) {
    event.preventDefault();
    showProductsByCategory('Decoração');
  });

  const acessoriosLink = document.getElementById('acessoriosLink');
  acessoriosLink.addEventListener('click', function(event) {
    event.preventDefault();
    showProductsByCategory('Acessórios');
  });

  const colecionaveisLink = document.getElementById('colecionaveisLink');
  colecionaveisLink.addEventListener('click', function(event) {
    event.preventDefault();
    showProductsByCategory('Colecionaveis');
  });

  const precoBaixoLink = document.getElementById('precoBaixoLink');
  precoBaixoLink.addEventListener('click', function(event) {
    event.preventDefault();
    showProductsByCategory('Preço Baixo');
  });

  

  // Adicione event listeners para os outros links de categoria

  // Mostrar todos os produtos por padrão
  showAllProducts();
});


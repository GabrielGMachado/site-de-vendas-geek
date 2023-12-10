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
  { name: "Jujutsu kaisen cap 1", price: 10, buttonText: "Adicionar ao Carrinho", imageUrl: "https://cdn.kobo.com/book-images/44717797-1fe9-475e-bca1-fe8aa6d0e7d8/1200/1200/False/jujutsu-kaisen-vol-1.jpg", category: "Livros",  },
  { name: "Demon Slayer cap 1", price: 15, buttonText: "Adicionar ao Carrinho", imageUrl: "https://cdn.kobo.com/book-images/086b65fc-4a24-4400-9b81-d828313958bf/1200/1200/False/demon-slayer-kimetsu-no-yaiba-vol-1.jpg", category: "Livros" },
  { name: "Black Clover cap 1", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://m.media-amazon.com/images/I/91WgpA0pjOL._AC_UF1000,1000_QL80_.jpg", category: "Livros"},
  { name: "Blue lock cap 1", price: 15, buttonText: "Adicionar ao Carrinho", imageUrl: "https://neogoog.xyz/uploads/b/blue-lock-episode-nagi/blue-lock-episode-nagi.jpg", category: "Livros" },
  { name: "Camisa Zero Two", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/helpfull/catalog/darling-in-the-franxx.png", category: "Vestimentas" },
  { name: "Camisa Nezuko", price: 10, buttonText: "Adicionar ao Carrinho", imageUrl: "https://cdn.awsli.com.br/800x800/2571/2571188/produto/218958802/camiseta-kimetsu-no-yaiba-nezuko-kamado-demon-slayer-_branca-1k1cl35gsr.png", category: "Vestimentas" },
  { name: "Camisa Geek", price: 15, buttonText: "Adicionar ao Carrinho", imageUrl: "https://cdn.colab55.com/images/55001/studio/60254/art/110925/tees.png", category: "Vestimentas",  },
  { name: "Camiseta Anime", price: 30, buttonText: "Adicionar ao Carrinho", imageUrl: "https://images.virgula.me/2015/12/geek-1.png", category: "Vestimentas" },
  { name: "Caneca Mario", price: 15, buttonText: "Adicionar ao Carrinho", imageUrl: "https://geekvip.com.br/wp-content/uploads/2020/12/caneca-geek-cogumelo-600x600.png", category: "Cozinha" },
  { name: "Caneca Naruto", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://2460.cdn.simplo7.net/static/2460/sku/geek-ramen-chibi-caneca-naruto--p-1688048796313.png", category: "Cozinha" },
  { name: "Torradeira Star Wars", price: 15, buttonText: "Adicionar ao Carrinho", imageUrl: "https://publicoa.com.br/wp-content/uploads/2022/07/TORRADEIRA-STAR-WARS-MALLORY-3-.png", category: "Cozinha" },
  { name: "Copo One Piece", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://images.tcdn.com.br/img/img_prod/1002138/180_copo_com_canudo_caveiras_one_piece_3897_1_c397d7365061a098f4deaac1a8bb61f0.png", category: "Cozinha" },
  { name: "Luminaria Star Wars", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://m.media-amazon.com/images/I/81XvJM3SWRL._AC_SX522_.jpg", category: "Decoração" },
  { name: "Almofada Baby Yoda", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://images.tcdn.com.br/img/img_prod/737159/almofada_fibra_veludo_40x40_cm_baby_yoda_1733_1_20200518191412.png", category: "Decoração" },
  { name: "Estante de livro", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://geekvip.com.br/wp-content/uploads/2020/12/suporte-para-livros-e-jogos-geek-dragon-ball-z-presente-cirativo-600x600.png", category: "Decoração" },
  { name: "Chaveiro RPG", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://geekvip.com.br/wp-content/uploads/2020/12/Porta-chaves-the-lord-of-de-key-senhor-dos-aneis-decoracao-geek-600x600.png", category: "Decoração" },
  { name: "Estatua DVA", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://static3.tcdn.com.br/img/img_prod/460977/estatua_d_va_overwatch_blizzard_entertainment_48341_1_20201211160538.png", category: "Colecionaveis" },
  { name: "Action Figuri Fortinite", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://www.megashopsul.com.br/6530-large_default/boneco-funko-pop-vinil-codename-elf-fortnite-colecionavel-geek.jpg", category: "Colecionaveis" },
  { name: "Estatua Hulk", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://static3.tcdn.com.br/img/img_prod/460977/boneco_hulk_os_vingadores_the_avengers_1_6_hot_toys_27875_1_20201211172859.png", category: "Colecionaveis" },
  { name: "Action Figuri Fortinite", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://www.megashopsul.com.br/6558-large_default/copy-of-boneco-funko-pop-vinil-sparkle-specialist-fortnite-colecionavel-geek.jpg", category: "Colecionaveis" },
  { name: "Figurinha Batman", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://www.bigfesta.com.br/resizer/view/600/600/true/false/5369.jpg", category: "Acessórios" },
  { name: "Facão ", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://static.ferramentaskennedy.com.br/storage/original/facao-para-mato-com-cabo-de-polipropileno-18-collins_1_1636381294.png", category: "Acessórios" },
  { name: "Colar Akatsuki", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://kunai-fire.com.br/cdn/shop/products/5-main-colar-de-pingente-de-organizacao-de-akatsuki-cosplay-otaku-joias-atacado-anime-japones-nuvem-vermelha-colar-para-mulheres-removebg-preview-removebg-preview.png?v=1677367201&width=533", category: "Acessórios" },
  { name: "Figurinha Anime", price: 20, buttonText: "Adicionar ao Carrinho", imageUrl: "https://www.itabiraprev.com.br/_images_/Novo-anime-moriarty-patriota-william-james-moriarty/2_270229.jpeg", category: "Acessórios" },
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
      <p>Preço: ${product.price}R$</p>
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
      <p>Preço: ${product.price}R$</p>
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

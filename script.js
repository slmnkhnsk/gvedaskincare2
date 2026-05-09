// ✅ Product Data
const products = [
  {
    name: "Probiotic Toothpaste",
    price: 295,
    img: "image/facewash.jpeg"
  },
  {
    name: "Sunscreen SPF 30",
    price: 750,
    img: "image/sunscreen.jpg"
  },
  {
    name: "Vitamin E Moisturizer SPF 30",
    price: 650,
    img: "image/moisturizer.jpg"
  },
  {
    name: "Vitamin C Face Serum",
    price: 920,
    img: "image/cserum.jpg"
  },
  {
    name: "Lemon & Turmeric Cleansing Milk",
    price: 490,
    img: "image/cleanser.jpg"
  },
  {
    name: "Hair Growth Oil",
    price: 599,
    img: "image/hairgrowth.png"
  },
  {
    name: "Keratin Shampoo",
    price: 750,
    img: "image/shampoo.png"
  },
  {
    name: "Toner",
    price: 650,
    img: "image/toner.jpeg"
  },
  {
    name: "Hair Serum",
    price: 550,
    img: "image/hairserum.png"
  },
  {
    name: "Shea Body Lotion",
    price: 650,
    img: "image/bodylotion.png"
  },
  {
    name: "Nourishing Hair Conditioner",
    price: 750,
    img: "image/conditioner.png"
  },
  {
    name: " Aqua Fresh handwash",
    price: 295,
    img: "image/handwash.png"
  },
  {
    name: "Reviving night cream",
    price: 995,
    img: "image/nightcream.png"
  },
  {
    name: "Keratin Hair Treatment cream",
    price: 1070,
    img: "image/haircream.png"
  },
  {
    name: "marqan passion Masculine perfume",
    price: 4659,
    img: "image/perfume2.png"
  },
    {
    name: "FH Secret Unisex perfume",
    price: 4659,
    img: "image/perfume1.png"
  },
   {
    name: "FH Essence Feminine perfume",
    price: 4650,
    img: "image/perfume.png"
  },
  {
    name: "Green tea",
    price: 549,
    img: "image/green tea.png"
  },
  {
    name: "Green tea",
    price: 549,
    img: "image/greentea.png"
  },
  {
    name: "honey soap",
    price: 195,
    img: "image/honey.png"
  },
  {
    name: "Tulsi soap",
    price: 195,
    img: "image/tulsi.png"
  }




];

// ✅ Select Product Container
const container = document.getElementById("productContainer");

// ✅ Generate Product Cards
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img 
      src="${product.img}" 
      alt="${product.name}" 
      loading="lazy"
      onerror="this.src='https://via.placeholder.com/200'"
    >

    <div class="title">${product.name}</div>

    <div class="price">
      Rs. ${product.price}
    </div>

    <button 
      class="btn" 
      onclick="orderOnWhatsApp('${product.name}', ${product.price})"
    >
      Order on WhatsApp
    </button>
  `;

  container.appendChild(card);
});

// ✅ WhatsApp Order Function
function orderOnWhatsApp(name, price) {

  // 👉 Replace with your WhatsApp number
  const phoneNumber = "97477702653";

  const message =
`Hello, I want to order:

Product: ${name}
Price: Rs. ${price}`;

  const url =
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
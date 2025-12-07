const products = [
  { id: 1, name: "Rose Face Wash", category: "Skincare", price: 499, image: "https://himalayawellness.eu/cdn/shop/products/Rose-face-wash-2022-2000px-Front_grande.png?v=1670907120" },
  { id: 2, name: "Matte Lipstick", category: "Makeup", price: 299, image: "https://praush.com/cdn/shop/products/wino_clock.jpg?v=1707370448&width=1000" },
  { id: 3, name: "Argan Hair Oil", category: "Haircare", price: 599, image: "https://www.khadinatural.com/cdn/shop/files/01_2fcaaba5-4609-471f-91eb-a914a4c905a9.jpg?v=1721284013" },
  { id: 4, name: "Vanilla Body Mist", category: "Fragrance", price: 399, image: "https://cdn.kindlife.in/images/detailed/65/woody_vanila_0005_06.jpg?t=1692448838" },
  { id: 5, name: "Mama Earth onion shampoo", category: "body care", price: 299, image: "https://m.media-amazon.com/images/I/41l6Uvh3EnL._UF1000,1000_QL80_.jpg" },

];

let cart = [];

function displayProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach(p => {
    const item = document.createElement("div");
    item.className = "product";
    item.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    list.appendChild(item);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById("cart-count").textContent = cart.length;
  updateCartPopup();
}

function updateCartPopup() {
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("total-price");
  container.innerHTML = "";

  let total = 0;
  cart.forEach(p => {
    total += p.price;
    const div = document.createElement("div");
    div.textContent = `${p.name} - ₹${p.price}`;
    container.appendChild(div);
  });

  totalEl.textContent = `Total: ₹${total}`;
}

document.getElementById("cart-btn").onclick = () => {
  document.getElementById("cart-popup").style.display = "block";
};

function closeCart() {
  document.getElementById("cart-popup").style.display = "none";
}

function checkout() {
  alert("Thank you for your purchase!");
  cart = [];
  document.getElementById("cart-count").textContent = "0";
  updateCartPopup();
  closeCart();
}

document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  displayFiltered(filtered);
});

function displayFiltered(list) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  list.forEach(p => {
    const item = document.createElement("div");
    item.className = "product";
    item.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(item);
  });
}

window.onload = displayProducts;




let isLogin = true;

function toggleAuth() {
  isLogin = !isLogin;

  const title = document.getElementById("auth-title");
  const confirmPassword = document.getElementById("confirm-password");
  const toggleText = document.getElementById("toggle-auth");

  if (isLogin) {
    title.textContent = "Login";
    confirmPassword.style.display = "none";
    toggleText.innerHTML = `Don't have an account? <a href="#" onclick="toggleAuth()">Register here</a>`;
  } else {
    title.textContent = "Register";
    confirmPassword.style.display = "block";
    toggleText.innerHTML = `Already have an account? <a href="#" onclick="toggleAuth()">Login here</a>`;
  }
}

function handleAuth() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm = document.getElementById("confirm-password").value.trim();

  if (!email || !password || (!isLogin && !confirm)) {
    alert("Please fill all fields.");
    return;
  }

  if (!isLogin && password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  if (isLogin) {
    // TEMP: Just simulate login
    alert("Logged in successfully (simulation)");
    document.getElementById("auth-container").style.display = "none";
  } else {
    // TEMP: Simulate registration
    alert("Registered successfully (simulation)");
    toggleAuth(); // Switch back to login
  }
}

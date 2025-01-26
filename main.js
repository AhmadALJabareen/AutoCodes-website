const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__form form", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  interval: 500,
});

//Modal product 

 // Data for products
 const dataProduct = [
  {
      id: 1,
      title: "Wheel Speed Sensors",
      image: "https://cdn.shopify.com/s/files/1/1334/2309/files/6_05f09974-7b48-4081-90e6-837fe8a86be7_480x480.jpg?v=1642147934",
      description: "These sensors are located on the knuckles, pointing towards the speed sensor rings installed on the driveshafts or the wheel bearings.",
      price: "15 JOD",
      revNum: 25
  },
  {
      id: 2,
      title: "Shock Absorbers",
      image: "https://cdn.shopify.com/s/files/1/1334/2309/files/10_d86135da-58f4-473e-b41e-bf30bf40ab3e_480x480.jpg?v=1642148130",
      description: "Shocks absorbers, also called suspension struts, rarely need replacement because of water causing rust but due to leaks.",
      price: "75 JOD",
      revNum: 50
  },
  {
      id: 3,
      title: "Battery",
      image: "https://isabela.iweb.co.uk/image/aHR0cHM6Ly93d3cueXVhc2EuY28udWsvbWVkaWEvY2F0YWxvZy9jYXRlZ29yeS9ZQlgzMDk2XzEucG5n?q=75&e=1209600&t=outbound&f=source",
      description: "Battery, in electricity and electrochemistry, converts chemical energy directly into electrical energy.",
      price: "100 JOD",
      revNum: 28
  }
];

// Generate product cards
const productsContainer = document.querySelector('.products-container');
productsContainer.innerHTML = dataProduct.map(product => `
  <div class="product" data-name="p-${product.id}">
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <div class="price">${product.price}</div>
  </div>
`).join('');

// Generate product previews
const productsPreview = document.querySelector('.products-preview');
productsPreview.innerHTML = dataProduct.map(product => `
  <div class="preview" data-target="p-${product.id}">
      <i class="fas fa-times"><i class="ri-close-circle-line"></i></i>
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <div class="price">${product.price}</div>
      <div class="buttons">
  <a href="#" class="buy">Buy Now</a>
  <a href="#" class="cart">Add to Cart</a>
</div>
  </div>
`).join('');

// Show preview on product click
const productElements = document.querySelectorAll('.product');
const previewBoxes = document.querySelectorAll('.preview');
productElements.forEach(product => {
  product.onclick = () => {
      productsPreview.style.display = 'flex';
      const name = product.getAttribute('data-name');
      previewBoxes.forEach(preview => {
          if (preview.getAttribute('data-target') === name) {
              preview.classList.add('active');
              preview.style.display = 'block';
          } else {
              preview.style.display = 'none';
          }
      });
  };
});

// Close preview
previewBoxes.forEach(preview => {
  preview.querySelector('.fa-times').onclick = () => {
      preview.classList.remove('active');
      productsPreview.style.display = 'none';
  };
});

ScrollReveal().reveal(".choose__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".choose__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".choose__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".choose__card", {
  duration: 1000,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".subscribe__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".subscribe__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".subscribe__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".subscribe__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

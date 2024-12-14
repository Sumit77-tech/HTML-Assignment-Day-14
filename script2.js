const products = [
    { name: 'Phone', price: 800 },
    { name: 'Laptop', price: 1500 },
    { name: 'Tablet', price: 400 }
  ];
  
  // Function to render the product list to the DOM
  function renderProductList() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear the current list
    
    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `${product.name} - $${product.price}`;
      productList.appendChild(li);
    });
  }
  
  // Function to sort by price ascending
  document.getElementById('sortByPriceAsc').addEventListener('click', () => {
    products.sort((a, b) => a.price - b.price);
    renderProductList();
  });
  
  // Function to sort by price descending
  document.getElementById('sortByPriceDesc').addEventListener('click', () => {
    products.sort((a, b) => b.price - a.price);
    renderProductList();
  });
  
  // Function to sort by name ascending
  document.getElementById('sortByNameAsc').addEventListener('click', () => {
    products.sort((a, b) => a.name.localeCompare(b.name));
    renderProductList();
  });
  
  // Function to sort by name descending
  document.getElementById('sortByNameDesc').addEventListener('click', () => {
    products.sort((a, b) => b.name.localeCompare(a.name));
    renderProductList();
  });
  
  // Initial render
  renderProductList();
  
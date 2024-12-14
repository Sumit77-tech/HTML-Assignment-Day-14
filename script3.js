// Initial products data
const products = [
    { name: 'Phone', price: 800, category: 'electronics' },
    { name: 'Laptop', price: 1500, category: 'electronics' },
    { name: 'Tablet', price: 400, category: 'electronics' },
    { name: 'Chair', price: 200, category: 'furniture' },
    { name: 'Sofa', price: 700, category: 'furniture' },
    { name: 'Desk', price: 300, category: 'furniture' }
];

// Current page and items per page
let currentPage = 1;
const itemsPerPage = 3;

// Function to display the products
function displayProducts(productsToDisplay) {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear the list

    productsToDisplay.forEach(product => {
        const li = document.createElement('li');
        li.classList.add('product');
        li.textContent = `${product.name} - $${product.price} (${product.category})`;
        productList.appendChild(li);
    });
}

// Function to update pagination
function updatePagination(filteredProducts) {
    const pageNumber = document.getElementById('pageNumber');
    pageNumber.textContent = `Page ${currentPage}`;

    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage * itemsPerPage >= filteredProducts.length;
}

// Function to paginate and show the current page products
function paginate(filteredProducts) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
    displayProducts(productsToDisplay);
    updatePagination(filteredProducts);
}

// Function to filter, sort, and display the products
function filterSortAndDisplay() {
    let filteredProducts = [...products];

    // Filter by category
    const selectedCategory = document.getElementById('category').value;
    if (selectedCategory) {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    // Sort by price
    const sortByPrice = document.getElementById('sortByPrice').value;
    if (sortByPrice === 'asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortByPrice === 'desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // Sort by name
    const sortByName = document.getElementById('sortByName').value;
    if (sortByName === 'asc') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortByName === 'desc') {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Display paginated products
    paginate(filteredProducts);
}

// Event listeners for filter and sort options
document.getElementById('category').addEventListener('change', filterSortAndDisplay);
document.getElementById('sortByPrice').addEventListener('change', filterSortAndDisplay);
document.getElementById('sortByName').addEventListener('change', filterSortAndDisplay);

// Event listeners for pagination buttons
document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        filterSortAndDisplay();
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    currentPage++;
    filterSortAndDisplay();
});

// Initial display of products
filterSortAndDisplay();

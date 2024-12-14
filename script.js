// Get the search input element and fruit list element
const searchInput = document.getElementById('searchInput');
const fruitList = document.getElementById('fruitList');
const fruits = Array.from(fruitList.getElementsByTagName('li'));

// Function to filter the list based on the search term
function filterFruits() {
    const searchTerm = searchInput.value.toLowerCase(); // Convert the search term to lowercase
    fruits.forEach(fruit => {
        const fruitName = fruit.textContent.toLowerCase(); // Convert fruit name to lowercase
        if (fruitName.includes(searchTerm)) {
            fruit.style.display = 'list-item'; // Show the fruit if it matches the search term
        } else {
            fruit.style.display = 'none'; // Hide the fruit if it does not match
        }
    });
}

// Add event listener to the search input to filter the list in real-time
searchInput.addEventListener('input', filterFruits);

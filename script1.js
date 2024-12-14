// Sample data: an array of 30 items (strings)
const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

// Define constants for items per page and the current index
const itemsPerPage = 5;
let currentIndex = 0;

// Get references to DOM elements
const itemList = document.getElementById('itemList');
const loadMoreButton = document.getElementById('loadMoreButton');
const noMoreMessage = document.getElementById('noMoreMessage');

// Function to display the next set of items
function loadItems() {
    // Determine the next set of items
    const nextItems = items.slice(currentIndex, currentIndex + itemsPerPage);
    
    // Append the items to the list
    nextItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });

    // Update the current index for the next load
    currentIndex += itemsPerPage;

    // Check if all items have been loaded
    if (currentIndex >= items.length) {
        loadMoreButton.disabled = true; // Disable the "Load More" button
        noMoreMessage.style.display = 'block'; // Show the "No more items to load" message
    }
}

// Initial load of the first 5 items
loadItems();

// Add event listener for the "Load More" button
loadMoreButton.addEventListener('click', loadItems);

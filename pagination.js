const items = Array.from({ length: 50 }, (_, i) => i + 1); // Array of numbers 1 to 50
const itemsPerPage = 10;
let currentPage = 1;

// Function to display the items for the current page
function displayItems() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = items.slice(startIndex, endIndex);

    const itemList = document.getElementById('itemList');
    itemList.innerHTML = itemsToDisplay.join(', ');

    const currentPageDisplay = document.getElementById('currentPage');
    currentPageDisplay.textContent = `Page ${currentPage}`;
}

// Function to handle the "Previous" button click
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayItems();
    }
}

// Function to handle the "Next" button click
function nextPage() {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
        currentPage++;
        displayItems();
    }
}

// Add event listeners to the "Previous" and "Next" buttons
document.getElementById('prevButton').addEventListener('click', prevPage);
document.getElementById('nextButton').addEventListener('click', nextPage);

// Display the items for the first page initially
displayItems();

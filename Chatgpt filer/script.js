  // Load the saved rows from localStorage when the page loads
  window.onload = function() {
    loadRows();
}

function addRow() {
    // Get input values
    var name = document.getElementById('nameInput').value;
    var status = document.querySelector('input[name="status"]:checked').value;
    var color = document.querySelector('input[name="color"]:checked').value;

    // Check if the name field is not empty
    if (name.trim() !== '') {
        // Create an object representing the row data
        var rowData = {
            name: name,
            status: status,
            color: color
        };

        // Add the row to the UI
        addRowToUI(rowData);

        // Save the row data to localStorage
        saveRowData();

        // Clear the input fields
        document.getElementById('nameInput').value = '';
        document.querySelector('input[name="status"][value="Playing"]').checked = true;
        document.querySelector('input[name="color"][value="Blue"]').checked = true;
    } else {
        alert('Please enter a name.');
    }
}

function addRowToUI(rowData) {
    // Create a new row div
    var newRow = document.createElement('div');
    newRow.className = 'row';
        //newRow.draggable = true; // Make the row draggable
        //newRow.ondragstart = handleDragStart;
        //newRow.ondragover = handleDragOver;
        //newRow.ondrop = handleDrop;

    // Create div for name column
    var nameCol = document.createElement('div');
    nameCol.textContent = rowData.name;

    // Create div for status column
    var statusCol = document.createElement('div');
    statusCol.textContent = rowData.status;

    // Create div for color column
    var colorCol = document.createElement('div');
    colorCol.textContent = rowData.color;
    colorCol.style.backgroundColor = rowData.color.toLowerCase();
    colorCol.style.color = 'white';
    colorCol.style.textAlign = 'center';
    colorCol.style.padding = '5px';
    colorCol.style.borderRadius = '5px';

    // Append columns to row
    newRow.appendChild(nameCol);
    newRow.appendChild(statusCol);
    newRow.appendChild(colorCol);

    // Append the new row to the container
    document.getElementById('rowsContainer').appendChild(newRow);
}






// ikke viktig endå \/

function saveRowData() {
    var rows = [];
    var rowsContainer = document.getElementById('rowsContainer');
    var rowElements = rowsContainer.querySelectorAll('.row');

    // Loop through all the rows in the UI and collect their data
    rowElements.forEach(function(rowElement) {
        var rowData = {
            name: rowElement.children[0].textContent,
            status: rowElement.children[1].textContent,
            color: rowElement.children[2].textContent
        };
        rows.push(rowData);
    });

    // Save the rows to localStorage
    localStorage.setItem('rows', JSON.stringify(rows));
}

function loadRows() {
    // Get the rows from localStorage
    var rows = JSON.parse(localStorage.getItem('rows')) || [];

    // Loop through the rows and add each to the UI
    rows.forEach(function(rowData) {
        addRowToUI(rowData);
    });
}

// Drag and drop functions
let draggedRow = null;

function handleDragStart(event) {
    draggedRow = event.target;
}

function handleDragOver(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    if (event.target.closest('.row') && draggedRow !== event.target.closest('.row')) {
        var rowsContainer = document.getElementById('rowsContainer');
        rowsContainer.insertBefore(draggedRow, event.target.closest('.row'));
        saveRowData(); // Save the new order to localStorage
    }
}
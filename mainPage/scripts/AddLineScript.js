let rowCount = 3;
const addLineButton = document.querySelector('.addLine');
const jobTableBody = document.getElementById('jobTableBody');

addLineButton.addEventListener('click', function() {
    const newRow = document.createElement('tr');
    newRow.className = rowCount % 2 === 0 ? 'even' : 'odd';

    const numberCell = document.createElement('td');
    numberCell.textContent = rowCount;
    newRow.appendChild(numberCell);

    for (let i = 1; i <= 5; i++) {
        const editableCell = document.createElement('td');
        editableCell.contentEditable = "true";
        newRow.appendChild(editableCell);
    }

    jobTableBody.appendChild(newRow);
    rowCount++;
});

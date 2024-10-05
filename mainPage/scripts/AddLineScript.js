
let rowCount = 3;
const addLineButton = document.querySelector('.addLine');
const jobTableBody = document.getElementById('jobTableBody');

addLineButton.addEventListener('click', function() {
    const newRow = document.createElement('tr');
    newRow.className = rowCount % 2 === 0 ? 'even' : 'odd';
    newRow.innerHTML = `
            <td>${rowCount}</td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>`;
   jobTableBody.appendChild(newRow);
   rowCount++;
});

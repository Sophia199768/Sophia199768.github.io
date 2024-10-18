
const deleteLineButton = document.querySelector('.deleteLine');

deleteLineButton.addEventListener('click', function() {
    const rows = jobTableBody.getElementsByTagName('tr');

    if (rows.length > 0) {
        jobTableBody.deleteRow(rows.length - 1);
        rowCount--;
    }
});
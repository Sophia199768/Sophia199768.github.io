document.addEventListener('DOMContentLoaded', function() {
    const monthChooseElements = document.querySelectorAll('.monthChoose');

    monthChooseElements.forEach(select => {
        const id = select.getAttribute('data-id');
        const savedMonth = localStorage.getItem(id);

        if (savedMonth) {
            select.value = savedMonth;
        }

        select.addEventListener('change', function() {
            const selectedMonth = select.value;
            if (selectedMonth) {
                localStorage.setItem(id, selectedMonth);
            }
        });
    });
});

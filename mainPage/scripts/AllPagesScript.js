document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.theme-toggle-button');

    function setTheme(theme) {
        if (theme === 'blue') {
            document.body.classList.add('blue-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('blue-theme');
        }
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    toggleButton.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('blue-theme') ? 'blue' : 'light';
        const newTheme = currentTheme === 'blue' ? 'light' : 'blue';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});

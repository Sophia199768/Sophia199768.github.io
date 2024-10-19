document.addEventListener("DOMContentLoaded", function() {
    let currentPath = window.location.pathname;
    let currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    let navLinks = document.querySelectorAll('.siteNavigation a');

    navLinks.forEach(function(link) {
        let linkPath = link.getAttribute('href');
        if (linkPath && linkPath !== '#') {
            let linkPage = linkPath.substring(linkPath.lastIndexOf('/') + 1);

            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        }
    });
});

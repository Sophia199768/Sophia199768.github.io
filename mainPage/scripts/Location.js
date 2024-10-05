document.addEventListener("DOMContentLoaded", function() {
    var currentPath = window.location.pathname;
    var currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    var navLinks = document.querySelectorAll('.siteNavigation a');

    navLinks.forEach(function(link) {
        var linkPath = link.getAttribute('href');
        if (linkPath && linkPath !== '#') {
            var linkPage = linkPath.substring(linkPath.lastIndexOf('/') + 1);

            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        }
    });
});

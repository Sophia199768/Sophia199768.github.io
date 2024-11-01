document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    emailjs.init("kHzWp8SVMDVA8M6Y_");

    const templateParams = {
        to_email: 'sophiabrovkina1234@gmail.com',
        email: email,
        message: `I promise to send you a jar of condensed milk`
    };

    emailjs.send('service_0rdlood', 'template_0adftol', templateParams)
        .then(function(response) {
            // Sweet alert use there to make beautiful modal window
            Swal.fire({
                title: 'Sucess!',
                text: 'You can use this website.',
                icon: 'success',
                confirmButtonText: 'Ок'
            }).then((result) => {
                if (result.isConfirmed) {
                    // toaststr is used there
                    toastr.options = {
                        "closeButton": true,
                        "progressBar": true,
                        "positionClass": "toast-top-right",
                    };


                    const mainContent = document.querySelectorAll("main");
                    const formContainer = document.querySelector(".form-container");

                    mainContent.forEach(element => element.classList.remove("hidden"));
                    formContainer.classList.add("hidden");

                }
            });
        })
        .catch(function(error) {
            toastr.error("Mistake!");
            console.error("EmailJS Error:", error);
        });
});

document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.querySelectorAll("main");
    mainContent.forEach(element => element.classList.add("hidden"));
});
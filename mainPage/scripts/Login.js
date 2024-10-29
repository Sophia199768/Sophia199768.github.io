document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    emailjs.init("kHzWp8SVMDVA8M6Y_");

    const templateParams = {
        to_email: 'sophiabrovkina1234@gmail.com',
        email: email,
        message: `NI promise to send you a jar of condensed milk`
    };

    emailjs.send('service_0rdlood', 'template_0adftol', templateParams)
        .then(function(response) {
            Swal.fire({
                title: 'Sucess!',
                text: 'You can use this website.',
                icon: 'success',
                confirmButtonText: 'Ок'
            }).then((result) => {
                if (result.isConfirmed) {
                    toastr.options = {
                        "closeButton": true,
                        "progressBar": true,
                        "positionClass": "toast-top-right",
                        "timeOut": "5000",
                    };

                    const mainContent = document.querySelectorAll("main");
                    const formContainer = document.querySelector(".form-container");

                    mainContent.forEach(element => element.classList.remove("hidden"));
                    formContainer.classList.add("hidden");

                }
            });
        })
        .catch(function(error) {
            toastr.error("Ошибка при отправке email!");
            console.error("EmailJS Error:", error);
        });
});

document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.querySelectorAll("main");
    mainContent.forEach(element => element.classList.add("hidden"));
});
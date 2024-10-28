document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    Swal.fire({
        title: 'Регистрация успешна!',
        text: 'Вы успешно зарегистрировались.',
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
            toastr.success('Success!');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const mainContent = document.querySelectorAll("main"); // Элементы, которые нужно скрыть до регистрации
    const formContainer = document.querySelector(".form-container"); // Контейнер формы

    // Скрываем основной контент до регистрации
    mainContent.forEach(element => element.classList.add("hidden"));

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Отключаем стандартное поведение формы

        const email = document.getElementById("email").value;

        // Проверка email, регистрация успешна
        if (email) {
            // Показать основной контент
            mainContent.forEach(element => element.classList.remove("hidden"));

            formContainer.classList.add("hidden");

            // Сообщение о регистрации через Toastr
            toastr.success("Регистрация прошла успешно!");

        } else {
            // В случае ошибки
            toastr.error("Введите правильный email!");
        }
    });
});

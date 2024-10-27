document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const usersTable = document.getElementById("usersTable").querySelector("tbody");
    const errorMessage = document.getElementById("errorMessage");

    const loadMoreButton = document.createElement('button');

    loadMoreButton.textContent = 'Load more';
    loadMoreButton.classList.add('load-more-btn');

    loadMoreButton.style.display = 'none';
    document.getElementById("usersTable").after(loadMoreButton);

    let currentGroup = 1;
    const loadedUserIds = new Set();

    preloader.classList.remove("hidden");

    function fetchUsers() {
        const url = 'https://jsonplaceholder.typicode.com/users';

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                preloader.classList.add("hidden");

                const newUsers = filterUsersByGroup(data, currentGroup);

                appendNewUsers(newUsers);

                updateLoadMoreButton(data.length);
            })
            .catch(error => {
                preloader.classList.add("hidden");
                errorMessage.classList.remove("hidden");
                console.error('Fetch error:', error);
            });
    }

    function filterUsersByGroup(users, group) {
        const itemsPerGroup = 5;
        const startIndex = (group - 1) * itemsPerGroup;
        const endIndex = startIndex + itemsPerGroup;

        return users.filter((user, index) => {
            return index >= startIndex && index < endIndex;
        });
    }

    function updateLoadMoreButton(totalUsers) {
        const maxGroups = Math.ceil(totalUsers / 5);

        if (currentGroup >= maxGroups) {
            loadMoreButton.style.display = 'none';
        } else {
            loadMoreButton.style.display = 'block';
        }
    }

    function appendNewUsers(users) {
        users.forEach(user => {
            if (!loadedUserIds.has(user.id)) {
                loadedUserIds.add(user.id);

                const row = document.createElement('tr');


                row.classList.add('new-row');

                const cells = [
                    { value: user.id },
                    { value: user.username },
                    { value: user.name },
                    { value: user.email }
                ];

                cells.forEach(cell => {
                    const td = document.createElement('td');
                    const text = document.createTextNode(cell.value);
                    td.appendChild(text);
                    row.appendChild(td);
                });

                usersTable.appendChild(row);

                setTimeout(() => {
                    row.classList.add('visible');
                }, 50);
            }
        });
    }


    loadMoreButton.addEventListener('click', () => {
        currentGroup++;
        preloader.classList.remove("hidden");
        fetchUsers();
    });


    fetchUsers();
});
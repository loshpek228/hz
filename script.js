

// Функция для скрытия прелоадера
function hidePreloader() {
    document.getElementById('preloader').style.display = 'none';
}

// Вызываем функцию скрытия прелоадера после загрузки страницы
window.onload = function() {
    hidePreloader();
};















fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    const massiveElement = document.getElementById('massive');
    data.forEach(item => {
        const div = document.createElement('div');
        const nameHeader = document.createElement('h1');
        nameHeader.textContent = `Name: ${item.name}`;
        const usernameHeader = document.createElement('h1');
        usernameHeader.textContent = `Username: ${item.username}`;
        const emailHeader = document.createElement('h2');
        emailHeader.textContent = `Email: ${item.email}`;
        const idHeader = document.createElement('h1');
        idHeader.textContent = `Id: ${item.id}`;
        const hr = document.createElement('hr');

        div.appendChild(nameHeader);
        div.appendChild(usernameHeader);
        div.appendChild(emailHeader);
        div.appendChild(idHeader);
        div.appendChild(hr);
        massiveElement.appendChild(div);
    });
})
.catch(error => console.error('Error fetching data:', error));




// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) =>{
// return response.json()
// })

// .then((data) =>{
// data.forEach(item => {
//     document.getElementById('massive').innerHTML +=`
//     Name: <h1>${item.name}</h1>
//      Username :<h1>${item.username}</h1>
//      Email :<h2>${item.email}</h2>
//     Id: <h1>${item.id}</h1>
//     <hr>`
// });
// })

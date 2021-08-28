

const generatorUser = () => {
    const url = `https://randomuser.me/api/?results=1`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
}

const displayUser = user => {
    console.log(user);
    const userContainer = document.getElementById('random-user');
    userContainer.textContent ='';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${user.picture.large}" class="card-img-top" alt="...">
        <div class="card-body pb-5">
        
        <ul class="list-group text-start list-group-flush">
            <li class="list-group-item"><span class="fw-bold">User Name:</span> ${user.login.username}</li>
            <li class="list-group-item"><span class="fw-bold">Email:</span> ${user.email}</li>
            <li class="list-group-item"><span class="fw-bold">Gender:</span> ${user.gender}</li>
            <li class="list-group-item"><span class="fw-bold">Location:</span> ${user.location.city}, ${user.location.country}, ${user.location.postcode}</li>
        </ul>
        </div>
    `;
    userContainer.appendChild(div);

}
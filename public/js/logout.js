const logoutEl = document.getElementById('logout');

console.log(logoutEl)
logoutEl.addEventListener('click', async (event) => {
    event.preventDefault()
    const response = await fetch('/api/users/logout', {
        method: 'DELETE'
    })
    if(response.ok){
        document.location.replace('/')
    }
});
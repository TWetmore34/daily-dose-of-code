const logoutEl = document.getElementById('logout');

logoutEl.addEventListener('click', async (event) => {
    event.preventDefault()
    // make delete request to logout function
    const response = await fetch('/api/users/logout', {
        method: 'DELETE'
    })
    if(response.ok){
        document.location.replace('/')
    }
});
const updateUsername = async (event) => {
    event.preventDefault();
    // grab username and create obj for put request
    const username = document.querySelector('#usernameUpdate').value.trim();

    const updatedUser = await {
        username: username
    }
    // confirms the username field exists
    if (username) {
      // put request to ./controllers/api/user-routes.js
        const response = await fetch(`/api/users/${event.target.dataset.userid}`, {
        method: "PUT",
        body: JSON.stringify( updatedUser ),
        headers: { "Content-Type": "application/json" },
      });
      // confirmation response and page reload
      if (response.ok) {
        console.log("Username has been updated.")
        alert('Succesfully updated!')
        document.location.reload(true)
      } else {
        alert(response.statusText);
      }
    }
  };
  
const updatePassword = async(event)=>{
    event.preventDefault();
    // grab pass val and place into obj
    const password = document.querySelector('#passwordUpdate').value.trim();

    const updatedUser = await {
        password: password
    }
    // confirms pass exists
    if (password) {
      // put request to ./controllers/api/user-routes.js
        const response = await fetch(`/api/users/${event.target.dataset.userid}`, {
        method: "PUT",
        body: JSON.stringify( updatedUser),
        headers: { "Content-Type": "application/json" },
      });
      // confirmation msg
      if (response.ok) {
        console.log("Password has been updated.")
        alert('Succesfully updated!')
        document.location.reload(true)
      } else {
        alert(response.statusText);
      }
    }
}

const updateEmail = async(event)=>{
    event.preventDefault();
    // grab email val
    const email = document.querySelector('#emailUpdate').value.trim();

    const updatedUser = await {
        email: email
    }
  
    if (email) {
      // put request to ./controllers/api/user-routes.js
        const response = await fetch(`/api/users/${event.target.dataset.userid}`, {
        method: "PUT",
        body: JSON.stringify( updatedUser ),
        headers: { "Content-Type": "application/json" },
      });
      // response msg
      if (response.ok) {
        console.log("Email has been updated.")
        alert('Succesfully updated!')
        document.location.reload(true)
      } else {
        alert(response.statusText);
      }
    }
}

const deleteAccount = async(event)=>{
    event.preventDefault();

    // confirm choice
    var choice = window.confirm("Are you sure to remove your account?");
    // if no, return. else, send delte request
    if(!choice){
        return;
    } else {
        const response = await fetch(`/api/users/${event.target.dataset.userid}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        // response msg
        if(response.ok){
            console.log("Successfully deleted!")
            document.location.replace('/');
            alert('Succesfully deleted!')
        } else {
            alert('Failed to delete');
        }
    }
}

// event listeners
document
    .getElementById("usernameBtn")
    .addEventListener("click", updateUsername);

document
    .querySelector("#emailBtn")
    .addEventListener("click", updateEmail);

document
    .querySelector("#passwordBtn")
    .addEventListener("click", updatePassword);

document
    .querySelector('#deleteUser')
    .addEventListener("click", deleteAccount);
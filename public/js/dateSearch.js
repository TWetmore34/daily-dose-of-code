const dateSend = document.getElementById('datechoice');
const datePicker = document.getElementById('datepicker')

dateSend.addEventListener('click', async (e) => {
    e.preventDefault();
    const now = new Date().getDate()
    const date = new Date(datePicker.value).getDate()
    if(date <= now){
        // sends to challenge w corresponding id - flaw of this system is that it can then only handle 30-31 challenges at a time
    document.location.replace(`/home/${date}`)
    } else {
        alert("please choose a challenge that has been revealed (today's date or earlier)");
    }
});
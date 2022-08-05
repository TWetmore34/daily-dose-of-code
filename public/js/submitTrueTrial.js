const submitEl = document.getElementById('submit-trial');
const outputVal = document.getElementById('console')

submitEl.addEventListener('click', async (e) => {
    e.preventDefault();
    const newTrial = await {
        challenge_id: e.target.dataset.challengeid,
        submission_detail: 'Success!!'
    }
    const response = await fetch('/api/trial', {
        method: 'POST',
        body: JSON.stringify(newTrial),
        headers: { "content-type": "application/json" },
    });
    if(response.ok) {
        alert('Great job!')
    } else {
        alert ('response failed to submit')
    }
});
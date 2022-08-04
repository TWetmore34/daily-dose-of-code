const submitEl = document.getElementById('submit-trial');
const outputVal = document.getElementById('console')

console.log(logs)

console.log(outputVal)
submitEl.addEventListener('click', async (e) => {
    e.preventDefault();
    const logs = document.querySelectorAll('.log')
    console.log(logs)
    const newTrial = await {
        challenge_id: e.target.dataset.challengeid,
        submission_detail: 'Success!!'
    }
    const response = await fetch('/api/trial', {
        method: 'POST',
        body: JSON.stringify(newTrial),
        headers: { "content-type": "application/json" },
    });

});
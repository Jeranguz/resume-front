const counterSpan = document.getElementById('counter');
let counter = 0;

const updateCounter = async () => {
    response = await fetch('https://1ekiv1rvoj.execute-api.us-east-1.amazonaws.com/visitor')
    .then(response => response.json())
    .then(data => {
        counter = data.body;
        counterSpan.textContent = counter;
    })
    .catch(error => {
        console.error('Error fetching visitor count:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateCounter();
});
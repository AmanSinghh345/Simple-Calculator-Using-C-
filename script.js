alert('test')
document.addEventListener('DOMContentLoaded', function () {
    const donationForm = document.getElementById('donation-form');
    const donationAmountInput = document.getElementById('donation-amount');
    const thankYouMessage = document.getElementById('thank-you-message');

    donationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const donationAmount = parseFloat(donationAmountInput.value);
        
        // Perform validation, e.g., check if donationAmount is a valid number
        
        // Simulate form submission (in a real application, this is where you would send data to the server)
        setTimeout(function() {
            donationForm.style.display = 'none';
            thankYouMessage.style.display = 'block';
            thankYouMessage.innerHTML = `Thank you for your donation of $${donationAmount.toFixed(2)}!`;
        }, 1000); // Simulating a delay of 1 second (1000 milliseconds)
    });
});

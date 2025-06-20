// Add CSS styles dynamically using JavaScript
const style = document.createElement('style');
style.textContent = `
body {
    font-family: Arial;
    background: #ffeaa7;
    display: flex;
    justify-content: center;
    padding-top: 50px;
}

.container {
    background: #fff;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 0 10px gray;
    width: 300px;
}
button {
    background: #e17055;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
}
#output {
    margin-top: 20px;
    font-weight: bold;
}
`;
document.head.appendChild(style);
// ...existing code...

// Function to show order placed message
function placeOrder() {
    document.getElementById('output').textContent = "Your order is placed";
}

// Add event listener to the order button
document.addEventListener('DOMContentLoaded', function() {
    const orderBtn = document.getElementById('orderBtn');
    if (orderBtn) {
        orderBtn.addEventListener('click', placeOrder);
    }
});
// ...existing code...
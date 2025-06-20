// Load users from localStorage or start with an empty array
let users = JSON.parse(localStorage.getItem('users')) || [];

// Register a new user
function register(username, password) {
    if (users.find(u => u.username === username)) {
        alert('Username already exists!');
        return false;
    }
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    return true;
}

// Login authentication
function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert('Login successful!');
        // You can set session info here
        return true;
    } else {
        alert('Invalid credentials!');
        return false;
    }
}

// Attach event listeners to the login and register buttons
document.getElementById('registerBtn').onclick = function() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    register(username, password);
};

document.getElementById('loginBtn').onclick = function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    login(username, password);
};
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;

            if (username === USERNAME && password === PASSWORD) {
                alert('Login successful!');
                // Redirect or load dashboard here
            } else {
                const errorMsg = document.getElementById('errorMsg');
                errorMsg.textContent = "Invalid username or password.";
                errorMsg.style.display = "block";
            }
        });
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('login-message');

    // Example hardcoded credentials
    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        loginMessage.textContent = "Login successful!";
        loginMessage.style.color = "green";
        // Redirect to a different page or perform any other actions
    } else {
        loginMessage.textContent = "Invalid username or password.";
        loginMessage.style.color = "red";
    }
}

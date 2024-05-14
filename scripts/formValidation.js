function checkPassword(input) {
    const password = document.getElementById('password').value;
    const confirmPassword = input.value;
    const message = document.getElementById('password_message');
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match";
        document.getElementById('password').value = '';
        input.value = '';
        document.getElementById('password').focus();
    } else {
        message.textContent = '';
    }
}
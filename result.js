document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;

    if (username === 'ANYAAA' && password === '123455') {
        window.location.href = 'Home.html';
    } else {
        alert('Invalid username or password.');
    }
});
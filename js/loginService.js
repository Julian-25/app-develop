document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefatul();
    const email = document.getElementById('email').value;
    alert();
    const password = document.getElementById('password').value;
    alert('Hola estos son tus datos: email: ' +email +' password: ' +password);
});
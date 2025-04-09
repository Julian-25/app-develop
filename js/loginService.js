document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefatul();
    const email = document.getElementById('email').value;
    alert();
    const password = document.getElementById('password').value;
    if(email === '' && password === ''){
        console.log('Por favor completa todos los campos')
    }
});
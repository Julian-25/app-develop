formData.addEventListener('submit', function (e) {
    e.preventDefatul();
    const email = getElementById('email');
    const password = getElementById('password');
    alert('Hola estos son tus datos: email: ' +email +' password: ' +password);
});
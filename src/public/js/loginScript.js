document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            console.log('Usuario ingresado con éxito:', result);
        } else {
            console.error('Error al ingresar el usuario:', result.message);
        }
    } catch (error) {
        console.error('Error al enviar datos:', error);
    }
});
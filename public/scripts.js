document.addEventListener("DOMContentLoaded", function () {
    // Aguarda o carregamento completo do DOM antes de atribuir eventos
    const registerButton = document.getElementById("registerButton");

    if (registerButton) {
        registerButton.addEventListener("click", registerUser);
    }
});

function registerUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

   
    // Send data to backend for registration
    fetch("/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
            confirmPassword,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.msg.includes("sucesso")) {
                alert(data.msg);
                // Redirecione para outra página ou faça alguma ação adicional em caso de sucesso
            } else {
                alert(data.msg);
            }
        })
        .catch((error) => console.error("Error:", error));
}

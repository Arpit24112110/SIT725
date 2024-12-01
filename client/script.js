// Basic JavaScript to handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const firstName = document.getElementById("first_name").value;
        const lastName = document.getElementById("last_name").value;
        const message = document.getElementById("message").value;

        alert(`Thank you, ${firstName} ${lastName}, for your message: "${message}"`);
    });
});

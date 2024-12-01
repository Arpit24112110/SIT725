// Initialize Materialize components and handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    // Materialize toast on form submission
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page reload

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Materialize toast for feedback
        M.toast({ html: `Thank you, ${name}! We'll contact you at ${email}.` });

        // Reset form
        this.reset();
    });
});

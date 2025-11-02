// script.js
(function() {
    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_USER_ID"); // ← REPLACE THIS WITH YOUR ACTUAL USER ID

    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value || 'No Subject';
        const message = document.getElementById('message').value;

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: "manojarya0207@mail.com"
        };

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
            .then(function(response) {
                alert("✅ Message sent successfully! We'll get back to you soon.");
                document.getElementById('contactForm').reset();
            }, function(error) {
                console.error('FAILED...', error);
                alert("❌ Failed to send message. Please try again or email us directly.");
            });
    });
})();
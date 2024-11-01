(function () {
    emailjs.init("S2Lx80YU0NACspkSE");
    console.log("EmailJS initialized");
  })();
  
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("Form submitted");
  
      emailjs.sendForm("service_houyfdr", "template_sc73eqv", this).then(
        function () {
          console.log("Email sent successfully");
          alert("Message Sent Successfully!");
        },
        function (error) {
          console.error("Error sending email:", error);
          alert("Failed to send the message: " + JSON.stringify(error));
        }
      );
    });
  
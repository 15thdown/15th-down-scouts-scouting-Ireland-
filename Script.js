document.addEventListener("DOMContentLoaded", function () {

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        formMessage.textContent =
            "Thanks " + name +
            "! Your message has been received.";

        contactForm.reset();

    });


    const links =
        document.querySelectorAll("nav a");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});

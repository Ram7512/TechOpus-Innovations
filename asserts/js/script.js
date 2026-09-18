/* =====================================================
                NAVBAR ACTIVE LINK
===================================================== */

const navLinks = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll("section");


window.addEventListener("scroll", function () {

    let current = "home";


    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

//AOS Animation home page
 AOS.init({
        duration: 2000,
        once: true,
        offset: 100
    });


    /* =================================
   CONTACT FORM
================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }

        if (phone === "") {
            alert("Please enter your phone number.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        alert(
            "Thank you " + name +
            "! Your enquiry has been submitted successfully."
        );

        contactForm.reset();

    });

}



/* =========================================
   APPLY BUTTONS
========================================= */

const applyButtons = document.querySelectorAll(".apply-btn");
const selectedJob = document.getElementById("selectedJob");

if (applyButtons.length > 0 && selectedJob) {

    applyButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("Apply Button clicked");

            const jobName =
                button.getAttribute("data-job");

            selectedJob.value = jobName;

            const modalElement =
                document.getElementById("applyModal");

            const modal =
                new bootstrap.Modal(modalElement);

            modal.show();

        });

    });

}



/* =========================================
   APPLICATION FORM
========================================= */

const applicationForm =
    document.getElementById("applicationForm");

if (applicationForm) {

    applicationForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("applicantName").value.trim();

            const email =
                document.getElementById("applicantEmail").value.trim();

            const phone =
                document.getElementById("applicantPhone").value.trim();

            const job =
                document.getElementById("selectedJob").value;

            if (name === "") {
                alert("Please enter your name.");
                return;
            }

            if (email === "") {
                alert("Please enter your email.");
                return;
            }

            if (phone === "") {
                alert("Please enter your phone number.");
                return;
            }

            alert(
                "Thank you " + name +
                "! Your application for " + job +
                " has been received."
            );

            applicationForm.reset();

            const modalElement =
                document.getElementById("applyModal");

            const modal =
                bootstrap.Modal.getInstance(modalElement);

            if (modal) {
                modal.hide();
            }

        }
    );

}
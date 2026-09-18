/* =====================================================
                NAVBAR ACTIVE LINK
===================================================== */

const navLinks = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach(function (link) {
    const linkPage = link.getAttribute("href");

    link.classList.toggle(
        "active",
        linkPage === currentPage ||
        (currentPage === "index.html" && linkPage === "index.html")
    );
});

//AOS Animation home page
if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 2000,
        once: true,
        offset: 100
    });
}


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


    /* Basic Validation */

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


    /* Success */

    alert(
        "Thank you " + name +
        "! Your enquiry has been submitted successfully."
    );


    /* Clear form */

    contactForm.reset();

    });
}





/* =========================================
 Careere section
========================================= */



/* =========================================
   APPLY BUTTONS
========================================= */

const applyButtons = document.querySelectorAll(".apply-btn");

const selectedJob =
    document.getElementById("selectedJob");


applyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const jobName =
            button.getAttribute("data-job");


        /* Put selected job inside modal */

        if (!selectedJob) {
            return;
        }

        selectedJob.value = jobName;


        /* Open Bootstrap modal */

        const modalElement =
            document.getElementById("applyModal");

        const modal =
            new bootstrap.Modal(modalElement);

        modal.show();

    });

});



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
            document.getElementById(
                "applicantName"
            ).value.trim();


        const email =
            document.getElementById(
                "applicantEmail"
            ).value.trim();


        const phone =
            document.getElementById(
                "applicantPhone"
            ).value.trim();


        const job =
            document.getElementById(
                "selectedJob"
            ).value;


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
            "Thank you " +
            name +
            "! Your application for " +
            job +
            " has been received."
        );


        applicationForm.reset();


        /* Close modal */

        const modalElement =
            document.getElementById("applyModal");

        const modal =
            bootstrap.Modal.getInstance(
                modalElement
            );

        modal.hide();

        }
    );
}
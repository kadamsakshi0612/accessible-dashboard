document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");
    const sidebar = document.getElementById("sidebar");

    if (menuButton && sidebar) {
        menuButton.addEventListener("click", function () {

            const isOpen = sidebar.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );
        });
    }

    const modal = document.getElementById("userModal");
    const openModalButton = document.getElementById("openModalButton");
    const closeModalButton = document.getElementById("closeModalButton");
    const cancelModalButton = document.getElementById("cancelModalButton");

    let previousFocusedElement = null;

    function openModal() {

        if (!modal) {
            return;
        }

        previousFocusedElement = document.activeElement;

        modal.hidden = false;

        document.body.style.overflow = "hidden";

        if (closeModalButton) {
            closeModalButton.focus();
        }
    }

    function closeModal() {

        if (!modal) {
            return;
        }

        modal.hidden = true;

        document.body.style.overflow = "";

        if (previousFocusedElement) {
            previousFocusedElement.focus();
        }
    }

    if (openModalButton) {
        openModalButton.addEventListener("click", openModal);
    }

    if (closeModalButton) {
        closeModalButton.addEventListener("click", closeModal);
    }

    if (cancelModalButton) {
        cancelModalButton.addEventListener("click", closeModal);
    }

    if (modal) {

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {
                closeModal();
            }

        });

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape" && !modal.hidden) {
                closeModal();
            }

        });

    }

    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (contactForm && formStatus) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            formStatus.textContent =
                "Your message has been submitted successfully.";

            contactForm.reset();

        });

    }

    const userForm = document.getElementById("userForm");

    if (userForm) {

        userForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!userForm.checkValidity()) {
                userForm.reportValidity();
                return;
            }

            closeModal();

            userForm.reset();

            alert("User added successfully.");

        });

    }

});
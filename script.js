document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("page-loaded");

});

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    const linkPage = link.getAttribute("href");

    if (
        linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")
    ) {
        link.classList.add("active");
    }

});

const revealElements = document.querySelectorAll(
    ".project-card, .skill-card, .strength, .contact-item"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "scroll-top";

topButton.setAttribute("aria-label", "Scroll to top");

document.body.appendChild(topButton);


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("visible");

    } else {

        topButton.classList.remove("visible");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();


        if (!name || !email || !message) {

            alert("Please fill in all the fields.");

            return;

        }


        alert(
            `Thanks ${name}! Your message has been received.`
        );


        contactForm.reset();

    });

}

document.querySelectorAll("a").forEach(link => {

    const href = link.getAttribute("href");

    if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        link.target === "_blank"
    ) {
        return;
    }


    link.addEventListener("click", event => {

        event.preventDefault();

        document.body.classList.add("page-exit");

        setTimeout(() => {

            window.location.href = href;

        }, 250);

    });

});

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("page-loaded");

});

const currentPage =
    window.location.pathname.split("/").pop();

const navLinks =
    document.querySelectorAll(".nav-links a");


navLinks.forEach(link => {

    const linkPage =
        link.getAttribute("href");

    if (
        linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")
    ) {

        link.classList.add("active");

    }

});

const revealElements =
    document.querySelectorAll(
        ".project-card, .skill-card, .strength, .contact-item"
    );


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});

const topButton =
    document.createElement("button");


topButton.innerHTML = "↑";

topButton.className = "scroll-top";

topButton.setAttribute(
    "aria-label",
    "Scroll to top"
);


document.body.appendChild(topButton);


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("visible");

    } else {

        topButton.classList.remove("visible");

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


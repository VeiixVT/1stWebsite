document.addEventListener("DOMContentLoaded", () => {
    const switchButton = document.querySelector('[role="switch"]');
    const switchIndicator = switchButton.querySelector("span[aria-hidden='true']");
    const submitButton = document.querySelector("button[type='submit']");

    let isAgreed = false;

    switchButton.addEventListener("click", () => {
        isAgreed = !isAgreed;

        if (isAgreed) {
            switchButton.classList.replace("bg-gray-200", "bg-[#143cc8]");
            switchIndicator.classList.replace("translate-x-0", "translate-x-3.5");
            switchButton.setAttribute("aria-checked", "true");
            submitButton.disabled = false;
            submitButton.classList.replace("bg-gray-300", "bg-[#143cc8]");
            submitButton.classList.replace("text-gray-500", "text-white");
        } else {
            switchButton.classList.replace("bg-[#143cc8]", "bg-gray-200");
            switchIndicator.classList.replace("translate-x-3.5", "translate-x-0");
            switchButton.setAttribute("aria-checked", "false");
            submitButton.disabled = true;
            submitButton.classList.replace("bg-[#143cc8]", "bg-gray-300");
            submitButton.classList.replace("text-white", "text-gray-500");
        }
    });

    submitButton.disabled = true;
    submitButton.classList.add("bg-gray-300", "text-gray-500");
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const submitButton = document.getElementById("submit-button");
    const requiredFields = form.querySelectorAll("input[required], textarea[required]");

    function checkFormValidity() {
        let allFilled = true;
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                allFilled = false;
            }
        });
        submitButton.disabled = !allFilled;
        submitButton.classList.toggle("bg-gray-300", !allFilled);
        submitButton.classList.toggle("bg-[#143cc8]", allFilled);
        submitButton.classList.toggle("text-gray-500", !allFilled);
        submitButton.classList.toggle("text-white", allFilled);
    }

    requiredFields.forEach(field => {
        field.addEventListener("input", checkFormValidity);
    });
});

document.getElementById("year").textContent = new Date().getFullYear();

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 125) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});

backToTopButton.addEventListener("click", () => {
    slowScrollToTop();
});

function slowScrollToTop() {
    const scrollDuration = 600;
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    function scrollAnimation() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
            requestAnimationFrame(scrollAnimation);
        }
    }

    requestAnimationFrame(scrollAnimation);
}


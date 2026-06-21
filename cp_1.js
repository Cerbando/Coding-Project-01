const form = document.getElementById("feedbackForm");
const comments = document.getElementById("comments");
const charCount = document.getElementById("charCount");
const error = document.getElementById("error");
const feedbackDisplay = document.getElementById("feedback-display");

// Character counter
comments.addEventListener("input", () => {
    charCount.textContent =
        `Characters: ${comments.value.length}`;
});

// Tooltip using mouseover/mouseout
document.querySelectorAll("input, textarea").forEach(field => {

    field.addEventListener("mouseover", () => {
        field.nextElementSibling.style.display = "block";
    });

    field.addEventListener("mouseout", () => {
        field.nextElementSibling.style.display = "none";
    });

});

// Form submission validation
form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const comment = comments.value.trim();

    if (!name || !email || !comment) {
        error.textContent = "All fields are required.";
        return;
    }

    error.textContent = "";

    const entry = document.createElement("div");
    entry.classList.add("feedback-entry");

    entry.innerHTML = `
        <strong>${name}</strong><br>
        ${email}<br>
        ${comment}
    `;

    feedbackDisplay.appendChild(entry);

    form.reset();
    charCount.textContent = "Characters: 0";
});

// Event delegation & bubbling
form.addEventListener("click", (event) => {
    console.log("Clicked:", event.target.id);
});


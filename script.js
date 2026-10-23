// 1. Select elements
const form = document.querySelector(".login-box");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const btnText = document.getElementById("btnText");
const btnIcon = document.getElementById("btnIcon");
const formError = document.getElementById("formError");
const togglePass = document.getElementById("togglePass");

// 2. Helpers
function showError(message) {
    formError.textContent = message;
}

function setLoading(isLoading) {
    loginBtn.disabled = isLoading;
    btnText.textContent = isLoading ? "Logging in..." : "Log in";
    btnIcon.className = isLoading
        ? "fa-solid fa-spinner fa-spin"
        : "fa-solid fa-arrow-right";
}

// 3. Show / hide password
togglePass.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";
    togglePass.querySelector("i").className = isHidden
        ? "fa-solid fa-eye-slash"
        : "fa-solid fa-eye";
});

// 4. Submit handler
form.addEventListener("submit", async (e) => {
    e.preventDefault();          // stop the page from reloading
    showError("");

    const email = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        showError("Please fill in both fields.");
        return;
    }
    if (password.length < 6) {
        showError("Password must be at least 6 characters.");
        return;
    }

    setLoading(true);

    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        alert("Logged in!");
    } catch (err) {
        showError(err.message || "Something went wrong.");
    } finally {
        setLoading(false);
    }
});

// 5. Social buttons (placeholder behavior)
document.querySelectorAll(".addition2 a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Social login clicked");
    });
});
export function initializeTheme() {

    const button = document.getElementById("theme-toggle");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        button.textContent = "☀️ Light Mode";
    }

    button.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const darkModeEnabled =
            document.body.classList.contains("dark-mode");

        if (darkModeEnabled) {
            localStorage.setItem("theme", "dark");
            button.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            button.textContent = "🌙 Dark Mode";
        }

    });

}
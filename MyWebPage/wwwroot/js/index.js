document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mainMenu = document.getElementById("main-menu");
    const menuLinks = document.querySelectorAll(".menu a");

    // Toggle-funktion för att öppna/stänga menyn
    hamburgerBtn.addEventListener("click", () => {
        const isOpen = mainMenu.classList.toggle("menu-open");
        hamburgerBtn.classList.toggle("active");

        // Förbättra tillgänglighet
        hamburgerBtn.setAttribute("aria-expanded", isOpen);
    });

    // Stäng menyn när en länk klickas
    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mainMenu.classList.remove("menu-open");
            hamburgerBtn.classList.remove("active");
            hamburgerBtn.setAttribute("aria-expanded", "false");
        });
    });

    // Stäng menyn vid klick utanför
    document.addEventListener("click", (e) => {
        if (!mainMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            mainMenu.classList.remove("menu-open");
            hamburgerBtn.classList.remove("active");
            hamburgerBtn.setAttribute("aria-expanded", "false");
        }
    });

    // Stäng menyn vid ESC-tangent
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mainMenu.classList.contains("menu-open")) {
            mainMenu.classList.remove("menu-open");
            hamburgerBtn.classList.remove("active");
            hamburgerBtn.setAttribute("aria-expanded", "false");
        }
    });
});
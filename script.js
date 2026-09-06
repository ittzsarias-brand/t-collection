const searchBtn = document.getElementById("searchBtn");
const searchPanel = document.getElementById("searchPanel");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

searchBtn?.addEventListener("click", () => {
    searchPanel.classList.add("open");

    setTimeout(() => {
        searchInput.focus();
    }, 100);
});

closeSearch?.addEventListener("click", () => {
    searchPanel.classList.remove("open");
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        searchPanel.classList.remove("open");
    }
});

document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelector(".menu")?.blur();
    });
});

let count = 0;

document.getElementById("bagBtn")?.addEventListener("click", () => {
    count++;

    document.querySelector(".bag-count").textContent = count;
});

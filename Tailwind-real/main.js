document.addEventListener("DOMContentLoaded", () => {
    const hosting = document.getElementById("hosting");
    const hostingOpen = document.getElementById("hostingOpen");

    hostingOpen.addEventListener("mouseover", (e) => {
        console.log("Click event occurred:", e);
        hosting.classList.add("showing");
    });

    hostingOpen.addEventListener("mouseout", () => {
        hosting.classList.remove("showing");
    });
});
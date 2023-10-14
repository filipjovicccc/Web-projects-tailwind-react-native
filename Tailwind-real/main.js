const hosting = document.getElementById("hosting")
const hostingOpen = document.getElementById("hostingOpen")
const webHosting = document.getElementById("webHosting")
const arrowBtns = document.querySelectorAll(".fa-caret-down")
const openBtn = document.getElementById("opening")
console.log(webHosting)
console.log(openBtn)

hostingOpen.addEventListener("mouseover", (e) => {
  hosting.style.display = "block"
})

hostingOpen.addEventListener("mouseout", (e) => {
  hosting.style.display = "none"
})



arrowBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const targetId = e.target.getAttribute("data-target");
        const targetDiv = document.getElementById(targetId);
        if (targetDiv) {
            if (targetDiv.style.display === "none" || targetDiv.style.display === "") {
                targetDiv.style.display = "block";
            } else {
                targetDiv.style.display = "none";
            }
        }
    });
});








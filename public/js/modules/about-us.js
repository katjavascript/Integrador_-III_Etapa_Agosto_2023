
// accordion
const headers = document.querySelectorAll(".header");
const contents = document.querySelectorAll(".content");
const icons = document.querySelectorAll(".icon");

for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", (el) => {
        const content = contents[i];
        const icon = icons[i];
        const isContentDisplayed = content.style.display == "block";

        content.style.display = isContentDisplayed ? "none" : "block";
        icon.innerHTML = isContentDisplayed ? "+" : "-";

        for (let j = 0; j < contents.length; j++) {
            const element = contents[j];
            if (j !== i) {
                element.style.display = "none";
                icons[j].innerHTML = "+";
            }
        }
    });
}
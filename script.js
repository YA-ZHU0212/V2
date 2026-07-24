const screens = document.querySelectorAll(".screen");

let current = 0;

function show(index) {
    screens[current].classList.remove("active");
    current = index;
    screens[current].classList.add("active");
}

/* ---------------- BOOT ---------------- */

const bootText = document.getElementById("bootText");
const bootBtn = document.getElementById("bootBtn");

const bootLines = [
    "BOOTING SYSTEM...",
    "CONNECTING SMART BRAIN...",
    "VERIFYING USER...",
    "ACCESS GRANTED"
];

let line = 0;

function bootSequence() {

    if (line < bootLines.length) {

        bootText.innerHTML += bootLines[line] + "<br>";

        line++;

        setTimeout(bootSequence, 700);

    } else {

        bootBtn.classList.remove("hidden");

    }

}

bootSequence();

/* ---------------- BUTTON ---------------- */

bootBtn.addEventListener("click", () => {

    show(1);

});

document.querySelector(".next").addEventListener("click", () => {

    show(2);

});

document.getElementById("driver").addEventListener("click", () => {

    show(3);

    setTimeout(() => {

        show(4);

    }, 2200);

    setTimeout(() => {

        show(5);

    }, 4200);

});

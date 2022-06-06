var x = document.getElementById("password-field");
var s = document.getElementById("Layer_1");
var h = document.getElementById("Layer_2");

function togglePass() {
    if (x.type === "password") {
        x.type = 'text';
        s.setAttribute('hidden', true);
        h.removeAttribute('hidden');
    } else {
        x.type = 'password';
        s.removeAttribute('hidden');
        h.setAttribute('hidden', true);
    }
}

// Toggle

const toggle = document.getElementById("toggle");
const main = document.getElementById("left-container");

function toggleBar() {
    toggle.classList.toggle("toggle-right");
    main.classList.toggle("left-container-dark");
}

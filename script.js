const texts = [
    "DEVELOPER",
    "YOUTUBER",
    "DESIGNER"
];

let speed = 40;

const textElement = document.querySelector(".typewriter-text"); 

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) { 
        textElement.innerHTML += texts[textIndex].charAt(characterIndex); 
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000); 
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1); 
        setTimeout(eraseText, 50); 
    } else {
        textIndex = (textIndex + 1) % texts.length; 
        characterIndex = 0;
        setTimeout(typeWriter, 500); 
    }
}


typeWriter();

const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
    const dots = elem.getAttribute("data-dots");
    const marked = elem.getAttribute("data-percent");
    const percent = Math.floor((dots * marked) / 100);
    const rotate = 360 / dots;
    let points = "";

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});
// Function to display project details in a modal
function viewDetails(title, description) {
    const modal = document.getElementById('projectModal');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Close the modal if user clicks outside of it
window.onclick = function (event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
};
// script.js

// Add event listeners for additional functionality (optional)
document.getElementById("signIn").addEventListener("click", () => {
    alert("Sign In button clicked!");
});

document.getElementById("signUpForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    alert("Form Submitted!");
});
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}

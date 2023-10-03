// Get references to DOM elements
const body = document.body;
const imagem = document.getElementById("imagem");
const modal = document.querySelector(".login-box");
const submitButton = document.getElementById("submit-name");
const myname = document.getElementById("myname");
const nameInput = document.getElementById("name");
const genderRadios = document.getElementsByName("gender");
const collapseButton = document.getElementById("caret");
const collapseSection = document.getElementById("collapseExample");
const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");
const degg = 6;

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Event listener for submit button click
  submitButton.addEventListener("click", function () {
    const userName = nameInput.value.trim();
    let selectedGender;

    // Find the selected gender radio button
    for (let i = 0; i < genderRadios.length; i++) {
      if (genderRadios[i].checked) {
        selectedGender = genderRadios[i].value;
        break;
      }
    }

    if (userName !== "" && selectedGender) {
      // Hide the modal
      modal.style.display = "none";

      // Set name and image based on gender
      if (selectedGender === "آقا") {
        myname.innerText = ` آقای ${userName} عزیز `;
        imagem.src = "./images/header/undraw_male_avatar_g98d (1).svg";
      } else {
        myname.innerText = ` خانم ${userName} عزیز `;
        imagem.src = "./images/header/undraw_female_avatar_efig (2).svg";
      }
    } else {
      alert("لطفا نام و جنسیت خود را وارد کنید.");
    }
  });

  // Event listener to hide collapseSection when clicking outside collapseButton
  document.addEventListener("click", function (e) {
    if (!collapseButton.contains(e.target)) {
      collapseSection.classList.remove("show");
    }
  });

  // Update clock every second
  setInterval(updateClock, 1000);
});

// Function to update the clock
function updateClock() {
  const d = new Date();
  const m = d.getMinutes() * degg;
  const s = d.getSeconds() * degg;
  const h = d.getHours() * 30;

  // Update clock hands' transformations
  hour.style.transform = `rotateZ(${h + 30 + m / 12}deg)`;
  sec.style.transform = `rotateZ(${s}deg)`;
  min.style.transform = `rotateZ(${m}deg)`;
}
